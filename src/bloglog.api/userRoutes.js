// external
import { Router } from 'express';

// locals
import { userService } from '../bloglog.services';
import UserModel from '../bloglog.models/userModel.js';

// create router
const router = Router();

/*
 *  get user by id
 */
router.get('/:id', (req, res, next) => {
  res.end("not yet implemented");
  // tagService.getTags()
  //   .then(function (result) {
  //     res.json(result);
  //   })
  //   .catch(function (errorResult) {
  //     res.json(errorResult);
  //   });
    
});

/*
 *  add user
 */
router.post('/', (req, res, next) => {

  userService.add(
    new UserModel(
      null,
      req.body.name,
      req.body.email,
      req.body.password))
    .then(() => res.sendStatus(200))
    .catch((result) => res.json(result));

});

export default router;