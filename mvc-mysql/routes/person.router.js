const express = require('express');
const routes = express.Router();
const personController = require('../controller/person.controller');

routes.get('/', personController.find);
routes.post('/', personController.create);
routes.get('/:id([0-9]+)', personController.findByID);
routes.put('/:id([0-9]+)', personController.update);
routes.delete('/:id([0-9]+)', personController.delete);

module.exports = routes;