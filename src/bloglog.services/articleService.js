/* -------------- imports -------------- */
// external
// import { Router } from 'express';

//locals
import Article from '../bloglog.models/articleModel.js';
import { articleRepository } from '../bloglog.repositories';
import Result from '../bloglog.common/result.js';
import ResultCodes from '../bloglog.common/resultCodes.js';


/* -------------- implementation -------------- */
function checkArticle(article) {
  if (!article.title
    || article.title.length === 0
    || article.title.length > 500) {
    return false;
  }

  if (!article.text
    || article.text.length === 0
    || article.text.length > 20000) {
    return false;
  }

  return true;
}

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
    if(checkArticle(articleModel)){
        return new articleRepository.add(articleModel);
    }

    return Promise.reject(new Result(null, false, "", ResultCodes.InvalidObject()));
  };
};