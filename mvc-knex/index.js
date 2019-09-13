const express = require('express');
const bodyParser = require('body-parser');
const Router = require('./routes');

const app = express();

app.use(bodyParser.json());

app.use(Router);

const appServer = app.listen(3000, () => {
    console.log('Aplicação está rodando! Na porta %s', appServer.address().port)
});


