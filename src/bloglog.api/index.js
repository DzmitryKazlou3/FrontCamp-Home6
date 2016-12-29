/* -------------- imports -------------- */
// external
import { Router } from 'express';

//locals
import articleRoutes from './articleRoutes.js';
import tagsRoutes from './tagsRoutes.js';

/* -------------- implementation -------------- */
// create router
const router = Router();

// add article routes
router.use('/articles', articleRoutes);

// add tag routes
router.use('/tags', tagsRoutes);



/* -------------- exports -------------- */
export default router;
