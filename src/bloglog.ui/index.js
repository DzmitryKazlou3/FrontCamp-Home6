/* -------------- imports -------------- */
// external
import { Router } from 'express';

//locals
// import articleRoutes from './articleRoutes.js';
// import tagsRoutes from './tagsRoutes.js';
// import userRoutes from './userRoutes.js';

// import views to bundle them
import { } from './views/index.html';

/* -------------- implementation -------------- */
// create router
const router = Router();

//
router.use('/', function (req, res) {
    res.render('index.html');
});

// // add tag routes
// router.use('/tags', tagsRoutes);

// // add user routes
// router.use('/users', userRoutes);


/* -------------- exports -------------- */
export default router;
