'use strict';

/* -------------- imports -------------- */
// external
import mongoose from 'mongoose';

//locals
import ArticleRepository from './mongooseRepositories/articleRepository.js';
import TagRepository from './mongooseRepositories/tagRepository.js';
import UserRepository from './mongooseRepositories/userRepository.js';
import CommentRepository from './mongooseRepositories/commentRepository.js';

/* -------------- implementation -------------- */
var connect = function connect() {
  mongoose.Promise = global.Promise;
  
  // TODO: move to config file
  mongoose.connect("mongodb://zlov:0429935@ds019488.mlab.com:19488/heroku_n0v8cmmh");
  return mongoose.connection;
};
connect();

// create repositories
const articleRepository = new ArticleRepository();
const tagRepository = new TagRepository();
const userRepository = new UserRepository();
const commentRepository = new CommentRepository();


/* -------------- exports -------------- */
export {
  articleRepository,
  tagRepository,
  userRepository,
  commentRepository
};