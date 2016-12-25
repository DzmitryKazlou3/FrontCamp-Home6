'use strict';
// external
// import { Router } from 'express';

//locals
import tagDataModel from '../mongooseModels/tagDataModel.js';
import Result from '../../bloglog.common/result.js';
import ResultCodes from '../../bloglog.common/resultCodes.js';

/* -------------- implementation -------------- */
export default class TagRepository {
  constructor() {
  }

  /*
   * gets tags
   */
  get() {

      return new Promise(function (resolve, reject) {
          tagDataModel
              .find({})
              .exec(function (err, tags) {
                  if (err) {
                      reject(new Result(null, false, err, ResultCodes.Error()));
                  }

                  resolve(new Result(tags, true, "", ResultCodes.Success()));
              });
      });

  };

  /*
   * adds tag
   */
  add(tag) {
    return tagDataModel.create(tag);
  };
};


