'use strict';
// external
// import { Router } from 'express';

//locals
// import articleRoutes from './articleRoutes.js';



/* -------------- implementation -------------- */
export default class Result{
    constructor(data, success, message, code){
      this.data = data;
      this.success = success;
      this.Message = message;
      this.code = code;
    }
}