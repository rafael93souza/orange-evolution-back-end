const { decodedToken } = require('../auth/authAdmin');
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
    console.log(req.admin)
    next();
};

module.exports = { authMiddlewareAdmin };
