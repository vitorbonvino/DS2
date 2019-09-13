const repository = require('../repository/cidade.repository');
const estado = [];

module.exports = {

    find: (req, res) => {

        repository.find().then(result => {

            const cidades = [];
            for (item of result) {

                let cidade = {
                    id: item.cidade_id,
                    nome: item.cidade_nome,
                    estado: {
                        id: item.estado_id,
                        nome: item.estado_nome,
                        sigra: item.estado_sigla
                    }

                }
                cidades.push(cidade);
            }
            console.log(result);
            res.send(cidades);
        }).catch(error => {
            res.status(500).send(error);
        });
    },

    findByID: (req, res) => {

        repository.findById(req.params).then(result => {
            if (!result[0]) {
                res.status(404).send('Not Found');
            } else {
                res.send(result[0]);
            }
        }).catch(error => {
            res.status(500).send(error);
        });
    },

    create: (req, res) => {
        const cidade = {
            nome: req.body.nome,
            estado_id: req.body.estado.id
        }
        repository.create(cidade).then(result => {
            console.log(cidade);
            res.send(cidade);
        }).catch(error => {
            res.status(500).send(error)
        });

    },

    update: (req, res) => {
        repository.update(req.body).then(result => {
            if (result.affectedRows == 0) {
                res.status(404).send('Not Found');
            } else {
                res.send(result[0]);
            }

        }).catch(error => {
            res.status(500).send(error)
        });

    },
    delete: (req, res) => {
        repository.delete(req.params).then(result => {
            res.send(result[0]);
        }).catch(error => {
            res.status(500).send(error);
        });
    }
}