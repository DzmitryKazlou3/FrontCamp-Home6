'use strict';
// external
// import { Router } from 'express';

//locals
import tagDataModel from '../mongooseModels/tagDataModel.js';
import TagModel from '../../bloglog.models/tagModel.js';
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
                  else if (!tags) {
                      reject(new Result(null, false, err, ResultCodes.ObjectNotFound()));
                  }
                  else {
                      let tagModels = [];
                      for (let tag of tags) {
                          tagModels.push(MapToTagModel(tag));
                      }

                      resolve(new Result(tagModels, true, "", ResultCodes.Success()));
                  }
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


function MapToTagModel(tagDataModel) {
    return new TagModel(
        tagDataModel._id,
        tagDataModel.value,
        tagDataModel.articles_ids);
}