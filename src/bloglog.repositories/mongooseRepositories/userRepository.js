'use strict';
// external
// import { Router } from 'express';

//locals
import userDataModel from '../mongooseModels/userDataModel.js';
import UserModel from '../../bloglog.models/userModel.js';
import Result from '../../bloglog.common/result.js';
import ResultCodes from '../../bloglog.common/resultCodes.js';

/* -------------- implementation -------------- */
export default class UserRepository {
  constructor() {
  }

  /*
   * gets user
   */
  get(email) {

    return new Promise(function (resolve, reject) {
      userDataModel
        .findOne({ "email": email })
        .exec(function (err, user) {
          if (err) {
            reject(new Result(null, false, err, ResultCodes.Error()));
          }
          else if (!user) {
            reject(new Result(null, false, err, ResultCodes.ObjectNotFound()));
          }
          else {
            resolve(new Result(MapToUserModel(user), true, "", ResultCodes.Success()));
          }
        });
    });

  };

  /*
   * adds tag
   */
  add(user) {
    return userDataModel.create(user);
  };
};

function MapToUserModel(user) {
  return new UserModel(
    user._id,
    user.name,
    user.email,
    ""
  );
}