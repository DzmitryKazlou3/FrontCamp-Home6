'use strict';
// external
// import { Router } from 'express';

//locals
import articleDataModel from '../mongooseModels/articleDataModel.js';
import ArticleModel from '../../bloglog.models/articleModel.js';
import Result from '../../bloglog.common/result.js';
import PageResult from '../../bloglog.common/pageResult.js';
import ResultCodes from '../../bloglog.common/resultCodes.js';

/* -------------- implementation -------------- */
export default class ArticleRepository {
    constructor() {
    }

    /*
     * gets articles
     */
    get(skip, count) {
        return new Promise(function (resolve, reject) {

            articleDataModel
                .find({})
                .sort('-createDateTime')
                .skip(skip)
                .limit(count)
                .exec(function (err, articles) {
                    if (err) {
                        reject(new Result(null, false, err, ResultCodes.Error()));
                    }
                    else if (!articles) {
                        reject(new Result(null, false, err, ResultCodes.ObjectNotFound()));
                    }
                    else {
                        let articleModels = [];
                        for (let article of articles) {
                            articleModels.push(MapToArticleModel(article));
                        }

                        articleDataModel.count(function (err, count) {
                            if (err) {
                                reject(new Result(null, false, err, ResultCodes.Error()));
                            }

                            resolve(new Result(new PageResult(articleModels, count), true, "", ResultCodes.Success()));
                        });
                    }
                });

        });
    }

    getByTagValue(filterData, skip, count) {
        
        let queryFilter = {};
        if(filterData.tags){
            queryFilter["tags"] = { $all: filterData.tags };
        }

        return new Promise(function (resolve, reject) {

            articleDataModel
                .find(queryFilter)
                .sort('-createDateTime')
                .skip(skip)
                .limit(count)
                .exec(function (err, articles) {
                    if (err) {
                        reject(new Result(null, false, err, ResultCodes.Error()));
                    }
                    else if (!articles) {
                        reject(new Result(null, false, err, ResultCodes.ObjectNotFound()));
                    }
                    else {
                        let articleModels = [];
                        for (let article of articles) {
                            articleModels.push(MapToArticleModel(article));
                        }

                        articleDataModel.count(queryFilter, function (err, count) {
                            if (err) {
                                reject(new Result(null, false, err, ResultCodes.Error()));
                            }

                            resolve(new Result(new PageResult(articleModels, count), true, "", ResultCodes.Success()));
                        });
                    }
                });
        });
    }

    /*
     * gets article by Id
     */
    getById(id) {
        return new Promise(function (resolve, reject) {

            articleDataModel
                .findOne({ '_id': id })
                .exec(function (err, article) {
                    if (err) {
                        reject(new Result(null, false, err, ResultCodes.Error()));
                    }
                    else if (!article) {
                        reject(new Result(null, false, err, ResultCodes.ObjectNotFound()));
                    }
                    else {
                        resolve(new Result(MapToArticleModel(article), true, "", ResultCodes.Success()));
                    }
                });

        });
    }

    /*
     * adds article
     */
    add(articleModel) {
        return new Promise(function (resolve, reject) {

            articleDataModel.create(articleModel, function (err, articleCreatedDataModel) {
                if (err) {
                    reject(new Result(null, false, err, ResultCodes.Error()));
                }
                else if (!articleCreatedDataModel) {
                    reject(new Result(null, false, err, ResultCodes.Error()));
                }
                else {
                    resolve(new Result(MapToArticleModel(articleCreatedDataModel), true, "", ResultCodes.Success()));
                }
            });

        });
    }

    /*
     * update article
     */
    update(articleModel) {
        return new Promise(function (resolve, reject) {

            articleDataModel.findByIdAndUpdate(
                articleModel.id,
                {
                    title: articleModel.title,
                    text: articleModel.text,
                    description: articleModel.description,
                    tags: articleModel.tags
                },
                { new: true },
                function (err, updatedArticleDataModel) {
                    if (err) {
                        reject(new Result(null, false, err, ResultCodes.Error()));
                    }

                    resolve(new Result(MapToArticleModel(updatedArticleDataModel), true, "updated succesful", ResultCodes.Success()));
                });

        });
    }

    /*
     * deletes article
     */
    delete(articleModel) {
        return new Promise(function (resolve, reject) {

            articleDataModel.findByIdAndRemove(articleModel.id, {}, function (err, deletedArticleDataModel) {
                if (err) {
                    reject(new Result(null, false, err, ResultCodes.Error()));
                }

                resolve(new Result(null, true, "deleted succesful", ResultCodes.Success()));
            });

        });
    }

};


function MapToArticleModel(articleDataModel) {
    return new ArticleModel(
        articleDataModel._id,
        articleDataModel.title,
        articleDataModel.text,
        articleDataModel.description,
        articleDataModel.tags,
        articleDataModel.createDateTime,
        articleDataModel.updateDateTime,
        articleDataModel.user);
}