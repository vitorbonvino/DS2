const express = require('express');
const personRouter = require('./person.router');
const stateRoute = require('./states.router');
const routes = new express.Router();

routes.use('/persons', personRouter);
routes.use('/states', stateRoute);

module.exports = routes;