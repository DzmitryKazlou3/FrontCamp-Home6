/* -------------- imports -------------- */
// external
// import { Router } from 'express';

//locals
import Tag from '../bloglog.models/tagModel.js';
import { tagRepository } from '../bloglog.repositories';
import Result from '../bloglog.common/result.js';
import ResultCodes from '../bloglog.common/resultCodes.js';


/* -------------- implementation -------------- */
function checkTag(tag){
    if(!tag.value
      || tag.value.length === 0
      || tag.value.length > 50){
      return false;
    }

    return true;
}

export default class TagService {
  constructor() {
  }

  /*
   * gets tags
   */
  getTags() {
    return tagRepository.get();
  };

  /*
   * adds tag
   */
  add(tagModel) {
    if(checkTag(tagModel)){
        return new tagRepository.add(tagModel);
    }

    return Promise.reject(new Result(null, false, "", ResultCodes.InvalidObject()));
  };
};