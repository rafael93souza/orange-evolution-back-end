const knex = require('../connections/database');
const errors = require('../utils/errorsBase');
const bcrypt = require("bcrypt");

const create = async (data) => {
    const admExists = await knex('administrador').where('email', data.email).first();
    if (admExists) {
        throw errors(409, 'E-mail já cadastrado no sistema!');
    }
    const passwordIncrypted = await bcrypt.hash(data.senha, 10);
    const admData = { ...data, senha: passwordIncrypted };
    const createdAdm = await knex('administrador').insert(admData).returning(['id', 'nome', 'email']);
    return createdAdm;
};

const findAll = async () => {
    const administrators = await knex('administrador').select(['id', 'nome', 'email']);
    return administrators;
};

module.exports = {
    create,
    findAll,
};
