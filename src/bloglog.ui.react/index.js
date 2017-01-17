/* -------------- imports -------------- */
// external
import { Router } from 'express';

import React from 'react';
import ReactDom from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import template from './views/template.js';
import Main from './views/main.js';

/* -------------- implementation -------------- */

// create router
const router = Router();


// main page
router.use('/', function (req, res) {
    let html = ReactDOMServer.renderToString(React.createElement(Main));
    res.send(template(
        {
            body: html,
            title: 'Blog Log'
        }));
});

/* -------------- exports -------------- */
export default router;