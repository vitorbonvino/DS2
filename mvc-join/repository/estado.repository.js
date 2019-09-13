const connection = require('../mysql-connection');

module.exports = {

    find: (callback) => {
        connection.query('SELECT * FROM estado', callback);
},

    findById: (params, callback) => {        
        connection.query('SELECT * FROM estado WHERE ID = ?', [params.id], callback);
},

    create: (params, callback) => {
            connection.query('INSERT INTO estado (nome,sigra) VALUES(?,?)', [params.nome,
            params.sigra], callback);           
        
    },

    update: (params, callback) => {
        connection.query('UPDATE estado SET nome = ?, sigra = ? WHERE id = ?', [params.nome,
        params.sigra, params.id], callback);           
    
},
    delete: (params, callback) => {        
        connection.query('DELETE FROM estado WHERE ID = ?', [params.id], callback);
}
};