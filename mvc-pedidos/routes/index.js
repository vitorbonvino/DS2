const express = require('express');
const clienteRouter = require('./cliente.router');
const vendedorRouter = require('./vendedor.router');
const produtoRouter = require('./produto.router');
const routes = new express.Router();

routes.use('/clientes', clienteRouter);
routes.use('/vendedores', vendedorRouter);
routes.use('/produtos', produtoRouter);

module.exports = routes;