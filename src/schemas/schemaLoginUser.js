const joi = require("joi")
const schemaLoginUser = joi.object({
    email: joi.string().email().required().trim().messages({
        'any.required': "O campo email é obrigatótio",
        'string.empty': "O campo email é obrigatótio"
    }),
    senha: joi.string().required().trim().messages({
        'any.required': "O campo senha é obrigatótio",
        'string.empty': "O campo senha é obrigatótio"
    })
});
module.exports = schemaLoginUser;