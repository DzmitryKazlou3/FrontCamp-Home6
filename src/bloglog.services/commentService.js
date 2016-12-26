/* -------------- imports -------------- */
// external
// import { Router } from 'express';

//locals
import Comment from '../bloglog.models/commentModel.js';
import { commentRepository, articleRepository } from '../bloglog.repositories';
import Result from '../bloglog.common/result.js';
import ResultCodes from '../bloglog.common/resultCodes.js';


/* -------------- implementation -------------- */
export default class TagService {
  constructor() {
  }

  /*
   * gets tags
   */
  getCommentsByArticleId(article_id) {
    return commentRepository.getByArticleId(article_id);
  };

  /*
   * adds comment to article
   */
  add(commentModel) {

    return new Promise(function (resolve, reject) {
      articleRepository.getById(commentModel.article_id)
        .then(function (result) {
          if (result.success) {
            if (checkComment(commentModel)) {
              return resolve(new commentRepository.add(commentModel));
            }

            return reject(new Result(null, false, "Comment has invalid field", ResultCodes.InvalidObject()));
          }
          else{
            reject(result);
          }
        })
        .catch(function (errorResult) {
          reject(new Result(null, false, errorResult.message, errorResult.code));
        });
    });

  }
}


// inner functions
function checkComment(comment) {
  if (!comment.text
    || comment.text.length === 0
    || comment.text.length > 5000) {
    return false;
  }

  if (!comment.user
    || !comment.user.user_id
    || !comment.user.name
  ) {
    return false;
  }

  return true;
}