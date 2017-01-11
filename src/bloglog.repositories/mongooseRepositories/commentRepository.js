'use strict';
// external
// import { Router } from 'express';

//locals
import commentDataModel from '../mongooseModels/commentDataModel.js';
import CommentModel from '../../bloglog.models/commentModel.js';
import Result from '../../bloglog.common/result.js';
import PageResult from '../../bloglog.common/pageResult.js';
import ResultCodes from '../../bloglog.common/resultCodes.js';

/* -------------- implementation -------------- */
export default class CommentRepository {
    constructor() {
    }

    /*
     * gets comments of the given article
     */
    getByArticleId(article_id, skip, count) {
        return new Promise(function (resolve, reject) {

            commentDataModel
                .find({ 'article_id': article_id })
                .sort('-createDateTime')
                .skip(skip)
                .limit(count)
                .exec(function (err, comments) {
                    if (err) {
                        reject(new Result(null, false, err, ResultCodes.Error()));
                    }
                    else if (!comments) {
                        reject(new Result(null, false, err, ResultCodes.ObjectNotFound()));
                    }
                    else {
                        let commentModels = [];
                        for (let comment of comments) {
                            commentModels.push(MapToCommentModel(comment));
                        }
                        resolve(new Result(commentModels, true, "", ResultCodes.Success()));
                    }
                });

        });
    }

    /*
     * adds comment
     */
    add(commentModel) {
        return new Promise(function (resolve, reject) {

            commentDataModel.create(commentModel, function (err, commentCreatedDataModel) {
                if (err) {
                    reject(new Result(null, false, err, ResultCodes.Error()));
                }
                else if (!commentCreatedDataModel) {
                    reject(new Result(null, false, err, ResultCodes.Error()));
                }
                else {
                    resolve(new Result(MapToCommentModel(commentCreatedDataModel), true, "", ResultCodes.Success()));
                }
            });

        });
    }

    /*
     * Removes comments for given article Id
     */
    deleteForArticleId(article_id) {
        return new Promise(function (resolve, reject) {
            
            commentDataModel
                .find({ "article_id": article_id })
                .remove(function (err, commentCreatedDataModel) {
                    if (err) {
                        reject(new Result(null, false, err, ResultCodes.Error()));
                    }
                    else if (!commentCreatedDataModel) {
                        reject(new Result(null, false, err, ResultCodes.Error()));
                    }
                    else {
                        resolve(new Result(MapToCommentModel(commentCreatedDataModel), true, "", ResultCodes.Success()));
                    }
                });

        });
    }

}

function MapToCommentModel(commentDataModel) {
    return new CommentModel(
        commentDataModel._id,
        commentDataModel.text,
        commentDataModel.user,
        commentDataModel.createDateTime,
        commentDataModel.article_id);
}