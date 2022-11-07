const joi = require("joi");
const schemaRegisterStatusClasses = joi.object({
    status: joi.string().required().trim().messages({
        'any.required': "O campo status é obrigatótio",
        'string.empty': "O campo status é obrigatótio"
    }),
    curso_id: joi.number().min(1).required().messages({
        'any.required': "Por favor informe o código do curso",
        "number.base": "Por favor informe o código de curso válido",
        'number.integer': "Por favor informe um código de curso válido",
        'number.min': "Por favor informe um código de curso válido"
    }),
    aula_id: joi.number().min(1).required().messages({
        'any.required': "Por favor informe o código da aula",
        "number.base": "Por favor informe o código de aula válido",
        'number.integer': "Por favor informe um código de aula válido",
        'number.min': "Por favor informe um código de aula válido"
    }),
});
module.exports = schemaRegisterStatusClasses;