const express = require('express');
const routes = express.Router();
const vendedorController = require('../controller/vendedor.controller');

routes.get('/', vendedorController.find);
routes.get('/:id([0-9]+)', vendedorController.findByID);

module.exports = routes;