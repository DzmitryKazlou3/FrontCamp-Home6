'use strict';
// external
// import { Router } from 'express';

//locals
import commentDataModel from '../mongooseModels/commentDataModel.js';
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
  getByArticleId(article_id) {
      return new Promise(function (resolve, reject) {
          commentDataModel
              .find({ 'article_id': article_id })
              .sort('-createDateTime')
              .exec(function (err, comments) {
                  if (err) {
                      reject(new Result(null, false, err, ResultCodes.Error()));
                  }

                  resolve(new Result(comments, true, "", ResultCodes.Success()));
              });
      });
  };

  /*
   * adds comment
   */
  add(comment) {
    return commentDataModel.create(comment);
  };
};


