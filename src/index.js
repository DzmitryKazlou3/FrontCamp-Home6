'use strict';

// internal
import path from 'path';

// external
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

// locals
import config from '../config.json';
import apiRoutes from './bloglog.api';
import uiRoutes from './bloglog.ui';
import uiReactRoutes from './bloglog.ui.react';
import auth from './bloglog.auth';



// create app
const app = express();
app.server = http.createServer(app);

app.use(cookieParser());

// parsing application/json body
app.use(bodyParser.json());

// make static files server
app.use(express.static('./dist'));
app.use(express.static('./node_modules'));

// configure views
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, './'));

// init auth
auth.initialize(app);

// set routes
app.use('/api', apiRoutes);
app.use('/react', uiReactRoutes);
app.use('/', uiRoutes);

console.log("NODE_ENV " + process.env.NODE_ENV);

// start server.
app.server.listen(process.env.PORT || config.port);