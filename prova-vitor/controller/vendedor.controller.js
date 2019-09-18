const repository = require('../repository/vendedor.repository');


module.exports = {

    find: (req, res) => {

        repository.find((error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            const vendedores = [];
            for (item of result) {
                let cidade = {
                    id: item.vendedor_id,
                    codigo: item.vendedor_codigo,
                    nome: item.vendedor_nome,
                    email: item.vendedor_email,
                    cidade: {
                        id: item.cidade_id,
                        nome: item.cidade_nome,
                        estado: {
                            id: item.estado_id,
                            nome: item.estado_nome,
                            uf: item.estado_sigla
                        }                         
                    }                                     
                }
                vendedores.push(cidade);
            }
            res.send(vendedores);
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