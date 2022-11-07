const knex = require('../connections/database');
const errors = require('../utils/errorsBase');

const create = async (id, data) => {
    if (!Number(id)) throw errors(400, 'Informe um código da trilha válido');

    const trailsExists = await knex('cursos').where({ id }).first();
    if (!trailsExists) throw errors(409, 'Trilha não cadastrada no sistema!');

    const classesExists = await knex('todos_cursos').where('curso_id', id).andWhereILike('titulo', data.titulo)
        .andWhereILike('tipo', data.tipo).andWhereILike('criador', data.criador)
        .andWhereILike('url', data.url).first();

    if (classesExists) throw errors(409, 'Aula já cadastrada no sistema!');
    data.curso_id = id;
    const createdClasses = await knex('todos_cursos').insert(data).returning('*');
    return createdClasses;
};


const detailClasses = async (id, curso_id) => {
    if (!Number(curso_id)) throw errors(400, 'Informe um código da trilha válido');

    const trail = await knex('cursos').where({ id: curso_id }).first();
    if (!trail) throw errors(400, 'Trilha não cadastrada no sistema!');

    const classesDetails = await knex('todos_cursos').where({ curso_id });
    const statusClasses = await knex("status").where({ curso_id }).andWhere({ usuario_id: id });

    statusClasses.map(status => {
        const classe = classesDetails.find(classe => classe.id === status.aula_id)
        classe.status = status.status
    });
    const classes = classesDetails.map(classe => {
        return { ...classe, nome_curso: trail.nome }
    })
    return classes;
};


const findAll = async () => {
    return await knex('todos_cursos');;
};


const remove = async (curso_id, aula_id) => {
    if (!Number(curso_id) || !Number(aula_id)) throw errors(400, 'Informe o código da trilha e da aula válido');

    const classesExists = await knex('todos_cursos').where({ id: aula_id }).andWhere(({ curso_id })).first();

    if (!classesExists) throw errors(400, 'Aula não encontrada no sistema!');

    await knex("status").where({ aula_id }).andWhere({ curso_id }).del()
    await knex('todos_cursos').where({ id: aula_id }).andWhere({ curso_id }).del()
    return true
};


const update = async (curso_id, aula_id, data) => {
    if (!Number(curso_id) || !Number(aula_id)) throw errors(400, 'Informe o código da trilha e da aula válido');

    const classesExists = await knex('todos_cursos').where('id', aula_id).andWhere('curso_id', curso_id).first();
    if (!classesExists) throw errors(400, 'Aula não encontrada no sistema!');

    const classesUpdateExists = await knex('todos_cursos').where("id", "!=", classesExists.id)
        .andWhere('curso_id', curso_id).andWhereILike('titulo', data.titulo).andWhereILike('tipo', data.tipo)
        .andWhereILike('criador', data.criador).andWhereILike('url', data.url).first();

    if (classesUpdateExists) throw errors(409, 'Aula já cadastrada no sistema!');

    const updateClasse = await knex('todos_cursos').update({ ...data })
        .where({ id: aula_id }).andWhere({ curso_id }).returning("*")
    return updateClasse
};


module.exports = {
    create,
    findAll,
    detailClasses,
    remove,
    update
};
