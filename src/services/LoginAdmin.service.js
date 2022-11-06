const knex = require('../connections/database');
const bcrypt = require('bcrypt');
const { generationToken } = require('../auth/authAdmin');
const errors = require('../utils/errorsBase');

const signIn = async (data) => {
    const { email, senha } = data;
    const admin = await knex('administrador').where('email', email).first();

    if (!admin) {
        throw errors(403, 'E-mail ou senha incorretos!');
    }

    const encrypted = await bcrypt.compare(senha, admin.senha);
    if (!encrypted) {
        throw errors(403, 'E-mail ou senha incorretos!');
    }

    const payload = { id: admin.id, name: admin.nome, email: admin.email };
    token = generationToken(payload);

    return { payload, token };
};

module.exports = {
    signIn,
};
