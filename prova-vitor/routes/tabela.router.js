const express = require('express');
const routes = express.Router();
const tabelaController = require('../controller/tabela.controller');

routes.get('/', tabelaController.find);
routes.post('/', tabelaController.create);
routes.get('/:id([0-9]+)', tabelaController.findByID);
routes.put('/:id([0-9]+)', tabelaController.update);
routes.delete('/:id([0-9]+)', tabelaController.delete);

module.exports = routes;