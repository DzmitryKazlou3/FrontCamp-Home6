/* -------------- imports -------------- */
// external
// import { Router } from 'express';

//locals
import Tag from '../bloglog.models/tagModel.js';
import { tagRepository } from '../bloglog.repositories';
import Result from '../bloglog.common/result.js';
import ResultCodes from '../bloglog.common/resultCodes.js';


/* -------------- implementation -------------- */
export default class TagService {
  constructor() {
  }

  /*
   * gets tags by values
   */
  getTagsByValues(values) {
    if(Array.isArray(values)){
        return tagRepository.get(values);
    }

    return Promise.reject(new Result(null, false, "Given tag values is not Array", ResultCodes.InvalidObject()))
  };

  createUnexisted(values){
    if (Array.isArray(values)) {
      return tagRepository.findOrCreate(values);
    }

    return Promise.reject(new Result(null, false, "Given tag values is not Array", ResultCodes.InvalidObject()))
  }

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


function checkTag(tag){
    if(!tag.value
      || tag.value.length === 0
      || tag.value.length > 50){
      return false;
    }

    return true;
}
