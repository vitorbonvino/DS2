const connection = require('../mysql-connection');
const query = 
  'SELECT cliente.id as cliente_id, cliente.codigo as cliente_codigo, cliente.nome as cliente_nome, '+
    'cliente.email as cliente_email, cliente.cidade_id as cidade_id, cidade.name as cidade_nome, '+
    'cliente.tabelapreco_id as tabela_id, tabelapreco.nome as tabela_nome, tabelapreco.fator as tabela_fator, '+
    'estado.id as estado_id, estado.name as estado_nome, estado.sigla as estado_sigla '+
  'FROM cliente '+
    'INNER JOIN tabelapreco on tabelapreco.id = cliente.tabelapreco_id '+
    'INNER JOIN cidade on cidade.id = cliente.cidade_id '+
    'INNER JOIN estado on estado.id = cidade.estado_id';
module.exports = {

    find: (callback) => {
        connection.query(query, callback);
},

    findById: (params, callback) => {        
        connection.query(query + ' WHERE cliente.id = ?', [params.id], callback);
    }
};