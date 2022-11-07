const knex = require('../connections/database');
const errors = require('../utils/errorsBase');

const create = async (usuario_id, data, userLogged) => {
    if (!Number(usuario_id)) {
        throw errors(400, 'Informe um código do aluno válido');
    }
    const userExists = await knex('usuarios').where('id', usuario_id).first();
    if (!userExists) {
        throw errors(409, 'usuario não encontrado no sistema!');
    }
    if (userExists.id !== userLogged) {
        throw errors(409, 'código do aluno inválido');
    }
    const trailExists = await knex('cursos').where({ id: data.curso_id }).first();
    if (!trailExists) {
        throw errors(409, 'Curso não cadastrado no sistema!');
    }
    const classesExists = await knex('todos_cursos').where({
        id: data.aula_id,
        curso_id: data.curso_id
    }).first();

    if (!classesExists) {
        throw errors(409, 'Aula não cadastrada no sistema!');
    }
    const statusExists = await knex('status')
        .where({ usuario_id })
        .andWhere({ curso_id: data.curso_id })
        .andWhere({ aula_id: data.aula_id })
        .first();
    if (statusExists) {
        const updateStatus = await knex('status').update({ status: data.status })
            .where({ id: statusExists.id })
            .returning('*');
        return updateStatus;
    } else {
        const createdStatus = await knex('status').insert({ usuario_id, ...data }).returning('*');
        return createdStatus;
    }
};

const detailStatus = async (usuario_id, userLogged) => {
    if (!Number(usuario_id)) {
        throw errors(400, 'Informe um código do aluno válido');
    }
    const userExists = await knex('usuarios').where('id', usuario_id).first();
    if (!userExists) {
        throw errors(409, 'usuarios não cadastrado no sistema!');
    }
    if (userExists.id !== userLogged) {
        throw errors(409, 'código do aluno inválido');
    }
    const statusDetails = await knex('status').where({ usuario_id });
    return statusDetails;
};

const findAll = async () => {
    const statusAll = await knex('status');
    return statusAll;
};

module.exports = {
    create,
    findAll,
    detailStatus
};
