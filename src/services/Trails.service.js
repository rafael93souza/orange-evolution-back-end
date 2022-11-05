const knex = require('../connections/database');
const errors = require('../utils/errorsBase');

const create = async (data) => {
    const trailExists = await knex('cursos').where('nome', data.nome).first();
    if (trailExists) {
        throw errors(409, 'Trilha já cadastrada no sistema!');
    }

    const createdTrail = await knex('cursos').insert(data).returning('*');

    return { success: createdTrail };
};

const findAll = async () => {
    const trails = await knex('cursos');
    console.log(trails)
    return trails;
};

module.exports = {
    create,
    findAll,
};
