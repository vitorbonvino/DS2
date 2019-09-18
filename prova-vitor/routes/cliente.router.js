const express = require('express');
const routes = express.Router();
const clienteController = require('../controller/cliente.controller');

routes.get('/', clienteController.find);
routes.get('/:id([0-9]+)', clienteController.findByID);

module.exports = routes;