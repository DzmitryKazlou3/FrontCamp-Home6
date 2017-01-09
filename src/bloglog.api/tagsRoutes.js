// external
import { Router } from 'express';

// locals
import { tagService } from '../bloglog.services';
import TagModel from '../bloglog.models/tagModel.js';

// create router
const router = Router();

/*
    get all
*/
router.get('/', (req, res, next) => {
debugger;
  tagService.getTags()
    .then(function (result) {
      res.json(result);
    })
    .catch(function (errorResult) {
      res.json(errorResult);
    });
    
});

// We add tags with articles
// router.post('/', (req, res, next) => {

//   tagService.add(
//     new TagModel(
//       null,
//       req.body.value,
//       []))
//     .then(() => res.sendStatus(200))
//     .catch((result) => res.json(result));

// });

export default router;