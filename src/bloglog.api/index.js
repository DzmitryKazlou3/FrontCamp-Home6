/* -------------- imports -------------- */
// external
import { Router } from 'express';

//locals
import articleRoutes from './articleRoutes.js';
import tagsRoutes from './tagsRoutes.js';
import userRoutes from './userRoutes.js';

/* -------------- implementation -------------- */
// create router
const router = Router();

// add article routes
router.use('/articles', articleRoutes);

// add tag routes
router.use('/tags', tagsRoutes);

// add user routes
router.use('/users', userRoutes);


/* -------------- exports -------------- */
export default router;
