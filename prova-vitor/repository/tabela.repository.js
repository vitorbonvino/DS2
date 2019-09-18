const connection = require('../mysql-connection');

module.exports = {

    find: (callback) => {
        connection.query('SELECT * FROM tabelapreco ', callback);
},

    findById: (params, callback) => {        
        connection.query('SELECT * FROM tabelapreco  WHERE ID = ?', [params.id], callback);
},

    create: (params, callback) => {
            connection.query('INSERT INTO tabelapreco (codigo,nome,fator) VALUES(?,?,?)', [params.codigo, params.nome,
            params.fator], callback);           
        
    },

    update: (params, callback) => {
        connection.query('UPDATE tabelapreco SET fator = ? WHERE id = ?', [params.fator,
        params.id], callback);           
    
},
    delete: (params, callback) => {        
        connection.query('DELETE FROM tabelapreco WHERE ID = ?', [params.id], callback);
}
};