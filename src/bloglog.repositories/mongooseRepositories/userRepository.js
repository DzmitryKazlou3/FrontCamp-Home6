'use strict';
// external
// import { Router } from 'express';

//locals
import userDataModel from '../mongooseModels/userDataModel.js';
import result from '../../bloglog.common/result.js';
import resultCodes from '../../bloglog.common/resultCodes.js';

/* -------------- implementation -------------- */
export default class UserRepository {
  constructor() {
  }

  /*
   * gets tags
   */
  getById(id) {

    //   return new Promise(function (resolve, reject) {
    //       tagDataModel
    //           .find({})
    //           .exec(function (err, tags) {
    //               if (err) {
    //                   reject(new result(null, false, err, resultCodes.Error()));
    //               }

    //               resolve(new result(tags, true, "", resultCodes.Success()));
    //           });
    //   });

  };

  /*
   * adds tag
   */
  add(user) {
    return userDataModel.create(user);
  };
};