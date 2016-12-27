'use strict';

// internal
import path from 'path';

// external
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';

// locals
import config from '../config.json';
import apiRoutes from './bloglog.api';
import uiRoutes from './bloglog.ui';
import auth from './bloglog.auth';

// create app
const app = express();
app.server = http.createServer(app);

// parsing application/json body
app.use(bodyParser.json());

// make static files server
app.use(express.static('dist'));
app.use(express.static('./node_modules'));

// configure views
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, '/views'));

// init auth
auth.initialize(app);

// set routes
app.use('/api', apiRoutes);
app.use('/', uiRoutes);

// start server.
app.server.listen(process.env.PORT || config.port);