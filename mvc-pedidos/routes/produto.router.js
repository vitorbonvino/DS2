const express = require('express');
const routes = express.Router();
const produtoController = require('../controller/produto.controller');

routes.get('/', produtoController.find);
routes.post('/', produtoController.create);
routes.get('/:id([0-9]+)', produtoController.findByID);
routes.put('/:id([0-9]+)', produtoController.update);
routes.delete('/:id([0-9]+)', produtoController.delete);

module.exports = routes;