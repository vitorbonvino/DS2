const connection = require('../mysql-connection');

    const query = 'SELECT id AS cliente_id, codigo AS cliente_codigo, '+
                    'nome AS cliente_nome, email AS cliente_email '+
                  'FROM cliente ';              

module.exports = {

    find: (callback) => {
        connection.query(query, callback);
},

    findById: (params, callback) => {        
        connection.query(query + ' where id = ?', [params.id], callback);
},

    create: (params, callback) => {
            connection.query('INSERT INTO cliente (id, codigo, nome,email) VALUES(?,?,?,?)', [params.id, params.codigo, 
                params.nome, params.email], callback);           
        
    },

    update: (params, callback) => {
        connection.query('UPDATE cliente SET codigo = ?, nome = ?, email = ? WHERE id = ?', [params.codigo, params.nome,
        params.email, params.id], callback);           
    
},
    delete: (params, callback) => {        
        connection.query('DELETE FROM cliente WHERE ID = ?', [params.id], callback);
    }
};