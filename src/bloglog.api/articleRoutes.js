// external
import { Router } from 'express';
import passport from 'passport';

// locals
import { articleService, commentService } from '../bloglog.services';
import ArticleModel from '../bloglog.models/articleModel.js';
import CommentModel from '../bloglog.models/commentModel.js';

// create router
const router = Router();

/*
    get recent articles
*/
router.get('/', (req, res, next) => {

  passport.authenticate('local', { failureRedirect: '/#login' });
  articleService.getRecent()
    .then((result) => {
      res.json(result);
    })
    .catch((errorResult) => {
      res.json(errorResult);
    });

});

router.post('/', (req, res, next) => {

  articleService.add(
    new ArticleModel(
      null,
      req.body.title,
      req.body.text,
      req.body.tags,
      Date.now(),
      Date.now(),
      req.body.user))
    .then(() => res.sendStatus(200))
    .catch((result) => res.json(result));

});

router.get('/:id/comments', (req, res, next) => {

  let article_id = req.params.id;
  commentService.getCommentsByArticleId(article_id)
    .then((result) => res.json(result))
    .catch((errorResult) => res.json(errorResult));

});

router.post('/:id/comments', (req, res, next) => {

  let article_id = req.params.id;
  commentService.add(
    new CommentModel(
      null,
      req.body.text,
      req.body.user,
      Date.now(),
      article_id))
    .then(() => res.sendStatus(200))
    .catch((errorResult) => res.json(errorResult));

});

export default router;