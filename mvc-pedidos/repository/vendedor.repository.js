const connection = require('../mysql-connection');

    const query = 'SELECT c.id AS vendedor_id, c.codigo AS vendedor_codigo, '+
                    'c.nome AS vendedor_nome, c.email AS vendedor_email '+
                  'FROM vendedor c ';              

module.exports = {

    find: (callback) => {
        connection.query(query, callback);
},

    findById: (params, callback) => {        
        connection.query(query + ' WHERE c.ID = ?', [params.id], callback);
},

    create: (params, callback) => {
            connection.query('INSERT INTO vendedor (nome,email) VALUES(?,?)', [params.nome,
            params.email], callback);           
        
    },

    update: (params, callback) => {
        connection.query('UPDATE vendedor SET nome = ?, email = ? WHERE id = ?', [params.nome,
        params.email, params.id], callback);           
    
},
    delete: (params, callback) => {        
        connection.query('DELETE FROM vendedor WHERE ID = ?', [params.id], callback);
}
};