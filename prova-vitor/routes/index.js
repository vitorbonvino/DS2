const express = require('express');
const tabelaRouter  = require('./tabela.router');
const clienteRouter = require('./cliente.router');
const vendedorRouter = require('./vendedor.router');
const routes = new express.Router();

routes.use('/tabela' , tabelaRouter);
routes.use('/cliente', clienteRouter);
routes.use('/vendedor', vendedorRouter);

module.exports = routes;