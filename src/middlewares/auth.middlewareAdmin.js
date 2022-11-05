const { decodedToken } = require('../auth/auth');
const knex = require("../connections/database");

const authMiddlewareAdmin = async (req, res, next) => {
    const token = req.headers.authorization;

    const decode = decodedToken(token);

    if (!decode) {
        return res.status(401).json({ message: 'administrador não autorizado' });
    }
    const admin = await knex("administrador").where('email', decode.payload.email).first();
    if (!admin) {
        return res.status(401).json({ message: 'administrador não autorizado' });
    }
    req.admin = decode.payload;
    next();
};

module.exports = { authMiddlewareAdmin };
