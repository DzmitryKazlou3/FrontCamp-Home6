'use strict';
// external
// import { Router } from 'express';

//locals
// import articleRoutes from './articleRoutes.js';



/* -------------- implementation -------------- */
export default class PageResult{
    constructor(data, count){
      this.data = data;
      this.count = count;
    }
}