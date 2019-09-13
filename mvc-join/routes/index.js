const express = require('express');
const estadoRouter = require('./estado.router');
const cidadeRouter = require('./cidade.router');
const routes = new express.Router();

routes.use('/estado', estadoRouter);
routes.use('/cidade', cidadeRouter);

module.exports = routes;