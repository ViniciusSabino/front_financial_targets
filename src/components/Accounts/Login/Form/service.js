import model from './schemas';
import configs from '../../../../helpers/configs';

const validateLogin = (loginModel) => {
  const schemaValidation = model.LoginSchema.validate(loginModel, configs.JOI_VALIDATE_OPTIONS);

  if (schemaValidation.error) {
    const { details: errorDetails } = schemaValidation.error;

    const errorMessages = errorDetails.reduce((errors, detail) => {
      errors[detail.context.key].push(detail.message);

      return errors;
    }, { email: [], password: [] });

    return errorMessages;
  }

  return { email: [], password: [] };
};

export default {
  validateLogin,
};
