const repository = require('../repository/tabela.repository');

module.exports = {
    find: (req,res) => {
        repository.find((error, result) => {
            if (error) {
                res.status(500).send(error);
            }
            res.send(result);
        });
    },

    findByID: (req,res) => {
        repository.findById(req.params, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            if (! result[0]){
                res.status(404).send('Not Found');
            }else{
                res.send(result[0]);
            }
        });
    },

    create: (req,res) => {
        repository.create(req.body, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }
            console.log(req.body);
            res.send(result);
        });
    },

    update: (req,res) => {
        req.body.id = req.params.id;
        repository.update(req.body, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }
            console.log(req.body);
            if (result.affectedRows == 0){
                res.status(404).send('Not Found');
            }else{
                res.send(result);
            }
        });
    },
    delete: (req,res) => {
        repository.delete(req.params, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }
            res.status(204).send();
        });
    } 
}