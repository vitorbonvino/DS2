const express = require('express');
const routes = express.Router();
const cidadeController = require('../controller/cidade.controller');

routes.get('/', cidadeController.find);
routes.post('/', cidadeController.create);
routes.get('/:id([0-9]+)', cidadeController.findByID);
routes.put('/:id([0-9]+)', cidadeController.update);
routes.delete('/:id([0-9]+)', cidadeController.delete);

module.exports = routes;