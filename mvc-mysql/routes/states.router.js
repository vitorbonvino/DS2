const express = require('express');
const routes = express.Router();
const stateController = require('../controller/states.controller');


routes.get('/', stateController.find);
routes.post('/', stateController.create);
routes.get('/:id([0-9]+)', stateController.findByID);
routes.put('/:id([0-9]+)', stateController.update);
routes.delete('/:id([0-9]+)', stateController.delete);

module.exports = routes;