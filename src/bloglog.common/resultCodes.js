'use strict';
// external
// import { Router } from 'express';

//locals
// import articleRoutes from './articleRoutes.js';



/* -------------- implementation -------------- */
export default class ResultCodes{
    static Error() { return -1;}
    static Success() { return 0;}

    
    static InvalidObject() { return 1;}
    static ObjectNotFound() { return 2;}
    static ObjectExists() { return 3;}
    static Unathorized() { return 4;}
    static InvalidArguments() { return 5;}
}