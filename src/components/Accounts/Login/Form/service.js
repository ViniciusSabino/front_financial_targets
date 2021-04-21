import model from './schemas';
import { JOI } from '../../../../utils/configs';

const validateLogin = ({ email, password }) => {
  const schemaValidation = model.LoginSchema
    .validate({ email, password }, JOI.VALIDATE_OPTIONS);

  if (schemaValidation.error) {
    const { details: errorDetails } = schemaValidation.error;

    const errors = errorDetails.map(({ context, message }) => ({
      field: context.key,
      message,
    }));

    return errors;
  }

  return [];
};

export default {
  validateLogin,
};
