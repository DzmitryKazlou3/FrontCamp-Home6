/* -------------- imports -------------- */
// external
// import { Router } from 'express';

//locals
import Article from '../bloglog.models/articleModel.js';
import { articleRepository } from '../bloglog.repositories';
import Result from '../bloglog.common/result.js';
import ResultCodes from '../bloglog.common/resultCodes.js';
import { tagService } from '../bloglog.services';


/* -------------- implementation -------------- */
export default class ArticleService {
  constructor() {
  }

  /*
   * gets recent articles
   */
  getRecent() {
    return articleRepository.get(0, 10);
  };

  /*
   * adds article
   */
  add(articleModel) {

    if (checkArticle(articleModel)) {
      return new Promise(function (resolve, reject) {

        articleRepository.add(articleModel)
          .then(addArticleResult => {
            tagService.createOrUpdateByArticleId(addArticleResult.data.id, articleModel.tags)
              .then((result) => {
                resolve(addArticleResult);
              })
              .catch((errorResult) => {
                reject(errorResult);
              });
          })
          .catch(addArticleErrorResult => resolve(addArticleErrorResult));
      });
    }

    return Promise.reject(new Result(null, false, "", ResultCodes.InvalidObject()));
  };

  /*
   * updates given article
   */
  update(articleModel) {

    // if articleModel is not valid - return error
    if(!checkArticle(articleModel)){
        return Promise.reject(new Result(null, false, "The given article is not valid", ResultCodes.InvalidObject()));
    }

    return new Promise(function (resolve, reject) {

      // find given article in storage
      articleRepository.getById(articleModel.id)
        .then(function (result) {

          if (result.success) {
            let articleFromStorage = result.data;

            // Check the article does not change owner. (i.e. check that you update your own article)
            if (articleFromStorage.user.user_id.equals(articleModel.user.user_id)) {

              articleFromStorage.title = articleModel.title;
              articleFromStorage.text = articleModel.text;
              articleFromStorage.description = articleModel.description;
              articleFromStorage.tags = articleModel.tags;
              // TODO: update tags table when tags were changed.

              articleRepository.update(articleModel)
                .then(result => {
                  resolve(result);
                })
                .catch(errorResult => {
                  reject(errorResult);
                });
              return;
            }
            
            // given article and stored article have different owners - it is error:
            // the article can't change the owner
            reject(new Result(null, false, "Given article has wrong user_id. The article can't change the owner.", ResultCodes.InvalidObject()));
          }
          else{
            reject(result);
          }

        })
        .catch(function (errorResult) {
          // article was not found in storage or some error occured
          reject(errorResult);
        });
        
    });
  }

  /*
   * deletes given article
   */
  delete(articleModel) {
    
    return new Promise(function (resolve, reject) {

      // find given article in storage
      articleRepository.getById(articleModel.id)
        .then(function (result) {

          if (result.success) {
            let articleFromStorage = result.data;

            // Check the article does not change owner.
            if (articleFromStorage.user.user_id.equals(articleModel.user.user_id)) {

              // TODO: delete tagsfrom tags table.
              articleRepository.delete(articleModel)
                .then(result => {
                  resolve(result);
                })
                .catch(errorResult => {
                  reject(errorResult);
                });
              return;
            }

            // given article and stored article have different owners - it is error:
            // the article can't change the owner
            reject(new Result(null, false, "Given article has wrong user_id. The article can't change the owner.", ResultCodes.InvalidObject()));
          }
          else {
            reject(result);
          }
        })
        .catch(function (errorResult) {
          // article was not found in storage or some error occured
          reject(errorResult);
        });
    });
  }
  
};

function checkArticle(article) {
  if (!article.title
    || article.title.length === 0
    || article.title.length > 150) {
    return false;
  }

  if (!article.description
    || article.description.length === 0
    || article.description.length > 300) {
    return false;
  }

  if (!article.text
    || article.text.length === 0
    || article.text.length > 20000) {
    return false;
  }

  if (!article.user
    || !article.user.user_id
    || !article.user.name) {
    return false;
  }

  return true;
}