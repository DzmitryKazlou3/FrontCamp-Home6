'use strict';

/* -------------- imports -------------- */
// external

//locals
import ArticleService from './articleService.js';
import TagService from './tagService.js';
import UserService from './userService.js';

/* -------------- implementation -------------- */
const articleService = new ArticleService();
const tagService = new TagService();
const userService = new UserService();


/* -------------- exports -------------- */
export {
    articleService,
    tagService,
    userService
};