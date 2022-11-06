const joi = require("joi");
const schemaRegisterClasses = joi.object({
    titulo: joi.string().required().trim().messages({
        'any.required': "Por favor, informe o título do curso",
        'string.empty': "Por favor, informe o título do curso"
    }),
    tipo: joi.string().required().trim().messages({
        'any.required': "Por favor, informe o tipo do curso",
        'string.empty': "Por favor, informe o tipo do curso"
    }),
    criador: joi.string().required().trim().messages({
        'any.required': "Por favor, informe o criador do curso",
        'string.empty': "Por favor, informe o criador do curso"
    }),
    duracao: joi.string().trim().allow(null, ''),

    url: joi.string().required().trim().messages({
        'any.required': "Por favor, informe o link do curso",
        'string.empty': "Por favor, informe o link do curso"
    })
});
module.exports = schemaRegisterClasses;
