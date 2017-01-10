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
  getByValues(values) {
      
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

  /*
   * gets tags, that contain given text in values
   */
  getContainsText(text) {

      return new Promise(function (resolve, reject) {
          tagDataModel
              .find({ value: { "$regex": text, "$options": "i" } })
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

  getArticleIdsByTagIds(tagIds, skip, count) {
      return new Promise(function (resolve, reject) {
          
          tagDataModel
              .find({ _id: { "$in": tagIds } })
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
  }

  createOrUpdateByArticleId(articleId, tagValues) {
      return new Promise(function (resolve, reject) {

          let updates = [];
          for (let tagValue of tagValues) {
              updates.push({
                  q: { value: tagValue }, // query - selector for which item apply updates
                  u: { $set: { value: tagValue }, $addToSet: { articles: articleId } }, // updates - what updates apply to item
                  upsert: true // if item does not exists - creates new one.
              });
          }
          
          tagDataModel.db.db.command({
              update: "tags",
              updates: updates,
              ordered: true,
              writeConcern: { w: "majority", wtimeout: 10000 }
          })
            .then(commandResult =>
                resolve(new Result(commandResult.upserted, true, "Success", ResultCodes.Success()))
            ).catch(() =>
                reject(
                    new Result(
                        commandResult,
                        false,
                        update.writeErrors ? update.writeErrors.errmsg : "" + ". " + update.writeConcernError ? update.writeConcernError.errmsg : "",
                        ResultCodes.Error()))
            );
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