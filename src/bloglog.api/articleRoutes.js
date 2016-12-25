// external
import { Router } from 'express';

// locals
import { articleService } from '../bloglog.services';
import ArticleModel from '../bloglog.models/articleModel.js';

// create router
const router = Router();

/*
    get all
*/
router.get('/', (req, res, next) => {
  articleService.getRecent()
    .then(function (result) {
      res.json(result);
    })
    .catch(function (errorResult) {
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

export default router;