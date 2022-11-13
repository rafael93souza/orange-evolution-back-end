const knex = require('../connections/database');
const bcrypt = require('bcrypt');
const errors = require('../utils/errorsBase');
const { generationToken } = require('../auth/auth');
const { keep } = require('../schemas/schemaRegisterUser');

const create = async (data) => {
  const userExists = await knex('usuarios').where('email', data.email);

  if (userExists.length !== 0) {
    throw errors(409, 'Usuário já cadastrado!');
  }
  const passwrdIncrypted = await bcrypt.hash(data.senha, 10);
  const userData = { ...data, senha: passwrdIncrypted };
  const user = await knex('usuarios').insert(userData).returning(['id', 'nome', 'email']);

  const payload = { id: user[0].id, nome: user[0].nome, email: user[0].email };
  token = generationToken(payload);
  return { user: user[0], token };
};

const findAll = async () => {
  const users = await knex('usuarios').select('id', 'nome', 'email');
  return users;
};
const detailUser = async (id) => {
  const users = await knex('usuarios').select(['id', 'nome', 'email']).where({ id });
  return users;
};

const createTrailsUser = async (id, cursos) => {
  const user = await knex('usuarios').select(['id', 'nome', 'email']).where({ id });
  if (!user.length) throw errors(400, 'Usuário não encontrado no sistema');

  cursos.map((trail) => {
    if (!Number(trail)) throw errors(400, 'Informe o código da trilha válido');
  });
  let trails = [];
  for (const trailID of cursos) {
    const trailExist = await knex('cursos').where({ id: trailID });
    if (!trailExist.length)
      throw errors(400, 'Algum curso não foi encontrado no sistema!');
    const userChooseTrail = await knex('escolha')
      .where({ usuario_id: id })
      .andWhere({ curso_id: trailID });
    if (!userChooseTrail.length) {
      const chooseTrail = await knex('escolha')
        .insert({ usuario_id: id, curso_id: trailID })
        .returning('*');
      trails.push(chooseTrail[0]);
    }
  }

  return trails;
};

const detailAllTrailsUser = async (id) => {
  const user = await knex('usuarios').select(['id', 'nome', 'email']).where({ id });
  if (!user.length) throw errors(400, 'Usuário não encontrado no sistema');
  const detailAllTrail = await knex('escolha').where({ usuario_id: id });
  return detailAllTrail;
};

module.exports = {
  create,
  findAll,
  detailUser,
  createTrailsUser,
  detailAllTrailsUser,
  detailAllTrailsUser,
};
