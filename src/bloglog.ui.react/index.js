/* -------------- imports -------------- */
// external
import { Router } from 'express';

import React from 'react';
import ReactDom from 'react-dom';
import ReactDOMServer from 'react-dom/server';

// local
import template from './views/template.js';
import Main from './views/main.js';
import SignUpPage from './views/signupPage.js';
import ArticlesPage from './views/articlesPage.js';
import ArticleDetailsPage from './views/articleDetailsPage';
import NewArticlePage from './views/newArticlePage';

// results
import Result from '../bloglog.common/result.js';
import ResultCodes from '../bloglog.common/resultCodes.js';

// local services
import { articleService, commentService } from '../bloglog.services';
/* -------------- implementation -------------- */

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

// singup
router.get('/signup', function (req, res) {

    let html = ReactDOMServer.renderToString(<SignUpPage />);
    res.send(template(
        {
            body: html,
            title: 'Blog Log',
            scriptDest: 'react/signup.bundle.js'
        }));

});

// articles page
router.get('/articles/:pageNumber/:pageSize', function (req, res) {

    if (/^\d+$/.test(req.params.pageNumber)
        && /^\d+$/.test(req.params.pageNumber)) {
            
        let pageNumber = Number(req.params.pageNumber);
        let pageSize = Number(req.params.pageSize);

        articleService.get({}, (pageNumber - 1) * pageSize, pageSize)
            .then((result) => {

                let html = ReactDOMServer.renderToString(<ArticlesPage dataContext={result.data} />);
                res.send(template(
                    {
                        body: html,
                        title: 'Blog Log',
                        scriptDest: 'react/articles.bundle.js',
                        data: result.data
                    }));

            })
            .catch((errorResult) => res.send("Error occured. " + errorResult.message));
    } else {
        next();
    }

});

router.get('/newarticle', passport.authenticate('jwt-cookie', { session: false }), function (req, res) {
debugger;
    let dataContext = { isAuth: true };
    let html = ReactDOMServer.renderToString(<NewArticlePage dataContext={dataContext}/>);
    res.send(template(
        {
            body: html,
            title: 'Blog Log',
            scriptDest: 'react/newArticle.bundle.js',
            data: {
                isAuth: true
            }
        }));

});

// article details page
router.get('/articles/:id', function (req, res) {

    let article_id = req.params.id;

    if (article_id) {

        articleService.getById(article_id)
            .then((result) => {

                commentService.getCommentsByArticleId(article_id, 0, 10)
                    .then((resultComments) => {

                        let html = ReactDOMServer.renderToString(<ArticleDetailsPage article={result.data} comments={resultComments.data}/>);
                        res.send(template(
                            {
                                body: html,
                                title: 'Blog Log',
                                scriptDest: 'react/articleDetails.bundle.js',
                                data: { 
                                    article: result.data,
                                    comments: resultComments.data
                                }
                            }));

                    })
                    .catch((errorResult) => res.send("Error occured. " + errorResult.message));

            })
            .catch((errorResult) => res.json(errorResult));

    }

});

router.get('/articles', function (req, res) {
    articleService.get({}, 0, 10)
    .then((result) => {

        let html = ReactDOMServer.renderToString(<ArticlesPage dataContext={result.data} />);
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