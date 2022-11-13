const joi = require('joi');
const schemaRegisterTrails = joi.object({
  nome: joi.string().required().trim().messages({
    'any.required': 'Por favor, informe o nome do curso',
    'string.empty': 'Por favor, informe o nome do curso',
  }),
  subtitulo: joi.string().required().trim().messages({
    'any.required': 'Por favor, informe o subtitulo do curso',
    'string.empty': 'Por favor, informe o subtitulo do curso',
  }),
  descricao: joi.string().required().trim().messages({
    'any.required': 'Por favor, informe a descricao do curso',
    'string.empty': 'Por favor, informe a descricao do curso',
  }),
  urlimage: joi.string().required().trim().messages({
    'any.required': 'Por favor, informe a url da imagem para curso',
    'string.empty': 'Por favor, informe a url da imagem para curso',
  }),
});
module.exports = schemaRegisterTrails;
