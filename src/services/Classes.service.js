const knex = require('../connections/database');
const errors = require('../utils/errorsBase');

const create = async (id, data) => {
    if (!Number(id)) {
        throw errors(400, 'Informe um código da trilha válido');
    }
    const trailsExists = await knex('cursos').where({ id }).first();
    if (!trailsExists) {
        throw errors(409, 'Trilha não cadastrada no sistema!');
    }
    const classesExists = await knex('todos_cursos')
        .where({ titulo: data.titulo })
        .andWhere({ tipo: data.tipo })
        .andWhere({ criador: data.criador })
        .andWhere({ url: data.url })
        .andWhere({ curso_id: id })
        .first();

    if (classesExists) {
        throw errors(409, 'Aula já cadastrada no sistema!');
    }
    data.curso_id = id;
    const createdClasses = await knex('todos_cursos').insert(data).returning('*');

    return createdClasses;
};

const detailClasses = async (curso_id) => {
    if (!Number(curso_id)) {
        throw errors(400, 'Informe um código da trilha válido');
    }
    const trail = await knex('cursos').where({ id: curso_id }).first();
    if (!trail) {
        throw errors(409, 'Trilha não cadastrada no sistema!');
    }
    const classesDetails = await knex('todos_cursos').where({ curso_id });
    const classes = classesDetails.map(classe => {
        return { ...classe, nome_curso: trail.nome }
    })
    return classes;
};

const findAll = async () => {
    const classesAll = await knex('todos_cursos');
    return classesAll;
};

module.exports = {
    create,
    findAll,
    detailClasses
};
