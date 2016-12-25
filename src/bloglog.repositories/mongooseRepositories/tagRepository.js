'use strict';
// external
// import { Router } from 'express';

//locals
import tagDataModel from '../mongooseModels/tagDataModel.js';
import result from '../../bloglog.common/result.js';
import resultCodes from '../../bloglog.common/resultCodes.js';

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
                      reject(new result(null, false, err, resultCodes.Error()));
                  }

                  resolve(new result(tags, true, "", resultCodes.Success()));
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


