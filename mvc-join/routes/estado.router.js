const express = require('express');
const routes = express.Router();
const estadoController = require('../controller/estado.controller');

routes.get('/', estadoController.find);
routes.post('/', estadoController.create);
routes.get('/:id([0-9]+)', estadoController.findByID);
routes.put('/:id([0-9]+)', estadoController.update);
routes.delete('/:id([0-9]+)', estadoController.delete);

module.exports = routes;