const connection = require('../mysql-connection');
const query = 
  'SELECT vendedor.id as vendedor_id, vendedor.codigo as vendedor_codigo, vendedor.nome as vendedor_nome, '+
    'vendedor.email as vendedor_email, vendedor.cidade_id as cidade_id, cidade.name as cidade_nome, '+
    'estado.id as estado_id, estado.name as estado_nome, estado.sigla as estado_sigla '+
  'FROM vendedor '+
    'INNER JOIN cidade on cidade.id = vendedor.cidade_id '+
    'INNER JOIN estado on estado.id = cidade.estado_id';
module.exports = {

    find: (callback) => {
        connection.query(query, callback);
},

    findById: (params, callback) => {        
        connection.query(query + ' WHERE vendedor.id = ?', [params.id], callback);
    }
};