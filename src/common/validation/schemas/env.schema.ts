import Joi from 'joi';

import {
  APP_HOST,
  APP_PORT,
  NODE_ENV,
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_USER,
} from '@common/constants';

export const EnvironmentSchema = Joi.object({
  [NODE_ENV]: Joi.string().valid('development', 'production', 'local').default('local'),
  [APP_PORT]: Joi.number().default(3000),
  [APP_HOST]: Joi.string().default('localhost'),
  [POSTGRES_HOST]: Joi.string().required(),
  [POSTGRES_PORT]: Joi.number().required(),
  [POSTGRES_USER]: Joi.string().required(),
  [POSTGRES_PASSWORD]: Joi.string().required(),
  [POSTGRES_DB]: Joi.string().required(),
});
