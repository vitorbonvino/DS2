const knex = require('../mysql-connection');

module.exports = {

    find: () => {

        return knex.select('c.id AS cidade_id', 'c.nome AS cidade_nome',
            'e.id AS estado_id', 'e.nome AS estado_nome', 'e.sigla AS estado_sigla').from({ c: 'cidade' })
            .innerJoin({ e: 'estado' }, 'e.id', 'c.estado_id');
    },

    findById: (params) => {
        return knex.select('c.id AS cidade_id', 'c.nome AS cidade_nome, ',
            'e.id AS estado_id', 'e.nome AS estado_nome', 'e.sigla AS estado_sigla').from({ c: 'cidade' }).
            leftJoin({ e: 'estado' }, 'e.id', 'c.estado_id').where('c.id', params.id);

    },

    create: (params) => {
        return knex('cidade').insert(params)
    },

    update: (params) => {
        return knex('cidade').update(params).where({ id: params.id });

    },
    delete: (params) => {
        return knex('cidade').del().where({ id: params.id });
    }
};