/* -------------- imports -------------- */
// external
import { Router } from 'express';

import React from 'react';
import ReactDom from 'react-dom';
import ReactDOMServer from 'react-dom/server';

// local
import template from './views/template.js';
import Main from './views/main.js';
import ArticlesPage from './views/articlesPage.js';

// results
import Result from '../bloglog.common/result.js';
import ResultCodes from '../bloglog.common/resultCodes.js';

// local services
import {articleService} from '../bloglog.services'
/* -------------- implementation -------------- */

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// create router
const router = Router();

// main page
router.get('/', function (req, res) {

    let html = ReactDOMServer.renderToString(<Main isAuth={req.cookies.Id !== undefined}/>);
    res.send(template(
        {
            body: html,
            title: 'Blog Log',
            scriptDest: 'react/main.bundle.js'
        }));

});

// articles page
router.get('/articles/:pageNumber/:pageSize', function (req, res) {

    let pageNumber = Number(req.params.pageNumber);
    let pageSize = Number(req.params.pageSize);
    
    articleService.get({}, (pageNumber - 1) * pageSize, pageSize)
    .then((result) => {

            let html = ReactDOMServer.renderToString(<ArticlesPage dataContext={result.data}/>);
            res.send(template(
                {
                    body: html,
                    title: 'Blog Log',
                    scriptDest: 'react/articles.bundle.js',
                    data: result.data
                }));

    })
    .catch((errorResult) => res.send("Error occured. " + errorResult.message));
        
});

/* -------------- exports -------------- */
export default router;