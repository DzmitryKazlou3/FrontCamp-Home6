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
   * gets tags by values
   */
  get(values) {
debugger;
      return new Promise(function (resolve, reject) {
          tagDataModel
              .find({value: {$in: values}})
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

  findOrCreate(tagValues) {
      return new Promise(function (resolve, reject) {

          let updates = [];
          for (let tagValue of tagValues) {
              updates.push({ q: { value: tagValue }, u: { value: tagValue }, upsert: true });
          }
debugger;
          let commandResult = tagDataModel.db.runCommand({
              update: "tags",
              updates: updates,
              ordered: false,
              writeConcern: { w: "majority", wtimeout: 10000 }
          });

          if(commandResult.ok){
              resolve(new Result(commandResult.upserted, true, "Success", ResultCodes.Success()));
          } else{
              reject(
                  new Result(
                      commandResult,
                       false,
                       update.writeErrors ? update.writeErrors.errmsg : "" + ". " + update.writeConcernError ? update.writeConcernError.errmsg : "",
                       ResultCodes.Error()));
          }

      });
  }

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