'use strict';

/* -------------- imports -------------- */
// external

//locals
import ArticleService from './articleService.js';
import TagService from './tagService.js';
import UserService from './userService.js';
import CommentService from './commentService.js';

/* -------------- implementation -------------- */
const articleService = new ArticleService();
const tagService = new TagService();
const userService = new UserService();
const commentService = new CommentService();


/* -------------- exports -------------- */
export {
    articleService,
    tagService,
    userService,
    commentService
};