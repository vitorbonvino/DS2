const states = [];

module.exports = {

    find: (req,res) => {
        res.send(states);
    },

    create: (req,res) => {
        const state = req.body;

        states.push(state);

        res.send(state);
    },

    findByID: (req,res) => {
        const {id} = req.params;

        res.send(states[id-1]);
    },

    update: (req,res) => {
        const {id} = req.params;
        const state = req.body;

        states[id-1] = state;

        res.send(state);
    },

    delete: (req,res) => {
        const {id} = req.params;

        states.splice(id-1, 1)

        res.send(204).send();      
    }

}