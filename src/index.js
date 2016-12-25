'use strict';

// external
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';

// locals
import config from '../config.json';
import apiRoutes from './bloglog.api';

// create app
const app = express();
app.server = http.createServer(app);

// parsing application/json body
app.use(bodyParser.json());

// set routes
app.use('/api', apiRoutes);

// start server.
app.server.listen(process.env.PORT || config.port);
