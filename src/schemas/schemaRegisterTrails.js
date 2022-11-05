const joi = require("joi");
const schemaRegisterTrails = joi.object({
    nome: joi.string().required().trim().messages({
        'any.required': "Por favor, informe o nome do curso",
        'string.empty': "Por favor, informe o nome do curso"
    })
});
module.exports = schemaRegisterTrails;
