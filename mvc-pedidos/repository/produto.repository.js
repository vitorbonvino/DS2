const connection = require('../mysql-connection');

    const query = 'SELECT c.id AS produto_id, c.codigo AS produto_codigo, '+
                    'c.nome AS produto_nome, c.descricao AS produto_descricao,'+
                    'c.preco as produto_preco '+
                  'FROM produto c ';              

module.exports = {

    find: (callback) => {
        connection.query(query, callback);
},

    findById: (params, callback) => {        
        connection.query(query + ' WHERE c.ID = ?', [params.id], callback);
},

    create: (params, callback) => {
            connection.query('INSERT INTO produto (nome, descricao, preco) VALUES(?,?, ?)', [params.nome,
            params.descricao, params.preco], callback);           
        
    },

    update: (params, callback) => {
        connection.query('UPDATE produto SET nome = ?, descricao = ?, preco? WHERE id = ?', [params.nome,
        params.descricao, params.preco, params.id], callback);           
    
},
    delete: (params, callback) => {        
        connection.query('DELETE FROM produto WHERE ID = ?', [params.id], callback);
}
};