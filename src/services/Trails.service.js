const knex = require('../connections/database');
const errors = require('../utils/errorsBase');

const create = async (data) => {
  const trailExists = await knex('cursos').whereILike('nome', data.nome).first();
  if (trailExists) {
    throw errors(409, 'Trilha já cadastrada no sistema!');
  }
  const createdTrail = await knex('cursos').insert(data).returning('*');
  return createdTrail;
};

const findAll = async () => {
  const trails = await knex('cursos');
  return trails;
};

const update = async (curso_id, data) => {
  if (!Number(curso_id)) throw errors(400, 'Informe o código da trilha válido');

  const trailExists = await knex('cursos').where('id', curso_id).first();
  if (!trailExists) throw errors(404, 'Curso não encontrado no sistema!');

  const trailUpdateExists = await knex('cursos')
    .whereILike('nome', data.nome)
    .andWhere('id', '!=', curso_id)
    .first();
  if (trailUpdateExists) throw errors(409, 'Aula já cadastrada no sistema!');

  const updateTrails = await knex('cursos')
    .update('nome', data.nome)
    .where('id', curso_id)
    .returning('*');
  return updateTrails;
};

const remove = async (curso_id) => {
  if (!Number(curso_id)) throw errors(400, 'Informe o código da trilha válido');

  const trailExists = await knex('cursos').where('id', curso_id).first();
  if (!trailExists) throw errors(400, 'Curso não encontrado no sistema!');

  await knex('status').where({ curso_id }).del();
  await knex('todas_aulas').where({ curso_id }).del();
  await knex('cursos').where({ id: curso_id }).del();
  return true;
};

module.exports = {
  create,
  findAll,
  update,
  remove,
};
