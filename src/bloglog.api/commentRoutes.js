// external
import { Router } from 'express';

// locals
import { commentService } from '../bloglog.services';
import Comment from '../bloglog.models/commentModel.js';

// create router
const router = Router();

/*
    get all
*/
// router.get('/', (req, res, next) => {

//   tagService.getTags()
//     .then(function (result) {
//       res.json(result);
//     })
//     .catch(function (errorResult) {
//       res.json(errorResult);
//     });
    
// });

router.post('/', passport.authenticate('jwt', { session: false}), (req, res, next) => {

  commentService.add(
    new Comment(
      req.body.text,
      req.body.value,
      {
        "user_id": req.user.id,
        "name": req.user.name
      },
      Date.now(),
      req.body.article_id))
    .then(() => res.sendStatus(200))
    .catch((result) => res.json(result));

});

// router.put('/', passport.authenticate('jwt', { session: false}), (req, res, next) => {

//   commentService.update(
//     new Comment(
//       req.body.text,
//       req.body.value,
//       {
//         "user_id": req.user.id,
//         "name": req.user.name
//       },
//       Date.now(),
//       req.body.article_id))
//     .then(() => res.sendStatus(200))
//     .catch((result) => res.json(result));

// });

export default router;