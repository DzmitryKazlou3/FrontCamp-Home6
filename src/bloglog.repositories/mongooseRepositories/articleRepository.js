'use strict';
// external
// import { Router } from 'express';

//locals
import articleDataModel from '../mongooseModels/articlesDataModel.js';
import result from '../../bloglog.common/result.js';
import pageResult from '../../bloglog.common/pageResult.js';
import resultCodes from '../../bloglog.common/resultCodes.js';

/* -------------- implementation -------------- */
export default class ArticleRepository {
  constructor() {
  }

  /*
   * gets articles
   */
  get(skip, count) {
      let promise = new Promise(function (resolve, reject) {
          articleDataModel
              .find({})
              .sort('-createDateTime')
              .skip(skip)
              .limit(count)
              .exec(function (err, articles) {
                  if (err) {
                      reject(new result(null, false, err, resultCodes.Error()));
                  }

                  articleDataModel.count(function (err, count) {
                      if (err) {
                          reject(new result(null, false, err, resultCodes.Error()));
                      }

                      resolve(new result(new pageResult(articles, count), true, "", resultCodes.Success()));
                  });
              });
      });

      return promise;
  };

  /*
   * adds article
   */
  add(article) {
    return articleDataModel.create(article);
  };
};


