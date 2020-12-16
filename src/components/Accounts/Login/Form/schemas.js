import Joi from 'joi';

const LoginSchema = Joi.object({
  email: Joi.string()
    .min(5)
    .max(50)
    .email({ minDomainSegments: 2, tlds: false })
    .messages({
      'string.min': '* O email deve ter pelo menos 5 caracteres',
      'string.empty': '* O email é obrigatório',
      'string.email': '* O email está inválido',
    }),

  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{5,30}$'))
    .messages({
      'string.empty': '* A senha é obrigatória',
      'string.pattern.base': '* A senha está inválida',
    }),
});

export default {
  LoginSchema,
};
