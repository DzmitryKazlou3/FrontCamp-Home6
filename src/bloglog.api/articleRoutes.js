/* -------------- imports -------------- */
// external
import { Router } from 'express';
import passport from 'passport';

// locals
import { articleService, commentService } from '../bloglog.services';
import ArticleModel from '../bloglog.models/articleModel.js';
import CommentModel from '../bloglog.models/commentModel.js';

import Result from '../bloglog.common/result.js';
import ResultCodes from '../bloglog.common/resultCodes.js';



/* -------------- implementation -------------- */
// create router
const router = Router();

/*
    get recent articles
*/
router.get('/', (req, res, next) => {

  articleService.getRecent()
    .then((result) => {
      res.json(result);
    })
    .catch((errorResult) => {
      res.json(errorResult);
    });

});

/*
    get recent article by id
*/
router.get('/:id', (req, res, next) => {

  var article_id = req.params.id;
  articleService.getById(article_id)
    .then((result) => {
      res.json(result);
    })
    .catch((errorResult) => {
      res.json(errorResult);
    });

});

/*
    creates new article
*/
router.post('/', passport.authenticate('jwt', { session: false }), (req, res, next) => {

  articleService.add(
    new ArticleModel(
      null,
      req.body.title,
      req.body.text,
      req.body.description,
      req.body.tags,
      Date.now(),
      Date.now(),
      {
        "user_id": req.user.id,
        "name": req.user.name
      }))
    .then((result) => res.json(result))
    .catch((errorResult) => res.json(errorResult));

});

/*
    gets articles accordeing the given filter
*/
router.post('/:pageNumber/:pageSize', passport.authenticate('jwt', { session: false }), (req, res, next) => {

  let pageNumber = Number(req.params.pageNumber);
  let pageSize = Number(req.params.pageSize);
  if (req.body.filterData) {
    articleService.get(req.body.filterData, (pageNumber - 1) * pageSize, pageSize)
      .then((result) => res.json(result))
      .catch((errorResult) => res.json(errorResult));
  } else {
    res.json(new Result(null, false, "The given filter data is invalid", ResultCodes.InvalidArguments()));
  }

});

/*
    updates the article
*/
router.put('/', passport.authenticate('jwt', { session: false }), (req, res, next) => {

  articleService.update(
    new ArticleModel(
      req.body.id,
      req.body.title,
      req.body.text,
      req.body.description,
      req.body.tags,
      req.body.createDateTime,
      Date.now(),
      {
        "user_id": req.user.id,
        "name": req.user.name
      }))
    .then(result => res.json(result))
    .catch((errorResult) => res.json(errorResult));

});

/*
    deletes the article
*/
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {

  var article_id = req.params.id;
  articleService.delete(
    new ArticleModel(
      article_id,
      null,
      null,
      null,
      null,
      null,
      null,
      {
        "user_id": req.user.id,
        "name": req.user.name
      }))
    .then(result => res.json(result))
    .catch((errorResult) => res.json(errorResult));

});


///////////// article comments section //////////////////////
router.get('/:id/comments/:pageNumber/:pageSize', passport.authenticate('jwt', { session: false }), (req, res, next) => {

  let article_id = req.params.id;
  let pageNumber = Number(req.params.pageNumber);
  let pageSize = Number(req.params.pageSize);

  commentService.getCommentsByArticleId(article_id, (pageNumber - 1) * pageSize, pageSize)
    .then((result) => res.json(result))
    .catch((errorResult) => res.json(errorResult));

});

router.post('/:id/comments/add', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  
  let article_id = req.params.id;
  commentService.add(
    new CommentModel(
      null,
      req.body.text,
      {
        "user_id": req.user.id,
        "name": req.user.name
      },
      Date.now(),
      article_id))
    .then(result => res.json(result))
    .catch((errorResult) => res.json(errorResult));

});



/* -------------- exports -------------- */
export default router;