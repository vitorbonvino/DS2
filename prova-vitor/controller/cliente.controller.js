const repository = require('../repository/cliente.repository');


module.exports = {

    find: (req, res) => {

        repository.find((error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            const clientes = [];
            for (item of result) {
                let cidade = {
                    id: item.cliente_id,
                    codigo: item.cliente_codigo,
                    nome: item.cliente_nome,
                    email: item.cliente_email,
                    cidade: {
                        id: item.cidade_id,
                        nome: item.cidade_nome,
                        estado: {
                            id: item.estado_id,
                            nome: item.estado_nome,
                            uf: item.estado_sigla
                        }
                    },
                    tabela: {
                        id: item.tabela_id,
                        nome: item.tabela_nome,
                        fator: item.tabela_fator
                    }                    
                }
                clientes.push(cidade);
            }
            res.send(clientes);
        });
    },

    findByID: (req, res) => {

        repository.findById(req.params, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            if (!result[0]) {
                res.status(404).send('Not Found');
            } else {
                
                res.send(result[0]);
            }
        });
    }
}