const express = require('express');
const routes = express.Router();
const vendedorController = require('../controller/vendedor.controller');

routes.get('/', vendedorController.find);
routes.post('/', vendedorController.create);
routes.get('/:id([0-9]+)', vendedorController.findByID);
routes.put('/:id([0-9]+)', vendedorController.update);
routes.delete('/:id([0-9]+)', vendedorController.delete);

module.exports = routes;