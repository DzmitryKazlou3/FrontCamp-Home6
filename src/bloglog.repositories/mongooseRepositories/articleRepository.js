'use strict';
// external
// import { Router } from 'express';

//locals
import articleDataModel from '../mongooseModels/articleDataModel.js';
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

                    articleDataModel.count(function (err, count) {
                        if (err) {
                            reject(new Result(null, false, err, ResultCodes.Error()));
                        }

                        resolve(new Result(new PageResult(articles, count), true, "", ResultCodes.Success()));
                    });
                });
        });

    };

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
                        resolve(new Result(article, true, "", ResultCodes.Success()));
                    }
                });
        });

    }

    /*
     * adds article
     */
    add(article) {
        return articleDataModel.create(article);
    };
};


