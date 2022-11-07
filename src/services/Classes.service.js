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

const detailClasses = async (id, curso_id) => {
    if (!Number(curso_id)) {
        throw errors(400, 'Informe um código da trilha válido');
    }
    const trail = await knex('cursos').where({ id: curso_id }).first();
    if (!trail) {
        throw errors(409, 'Trilha não cadastrada no sistema!');
    }
    const classesDetails = await knex('todos_cursos').where({ curso_id });
    const statusClasses = await knex("status").where({ curso_id }).andWhere({ usuario_id: id });

    statusClasses.map(status => {
        const classe = classesDetails.find(classe => {
            return classe.id === status.aula_id
        })
        classe.status = status.status
    });

    const classes = classesDetails.map(classe => {
        return { ...classe, nome_curso: trail.nome }
    })
    return classes;
};

const findAll = async () => {
    const classesAll = await knex('todos_cursos');
    return classesAll;
};

const remove = async (curso_id, aula_id) => {
    if (!Number(curso_id) || !Number(aula_id)) {
        throw errors(400, 'Informe o código da trilha e da aula válido');
    }
    const classesExists = await knex('todos_cursos')
        .where({ id: aula_id })
        .andWhere(({ curso_id }))
        .first();

    if (!classesExists) {
        throw errors(409, 'Aula não encontrada no sistema!');
    }
    await knex("status").where({ aula_id }).andWhere({ curso_id }).del()
    await knex('todos_cursos')
        .where({ id: aula_id })
        .andWhere({ curso_id })
        .del()
    return true
};

module.exports = {
    create,
    findAll,
    detailClasses,
    remove,

};
