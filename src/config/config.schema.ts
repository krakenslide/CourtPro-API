import * as joi from 'joi';

export const configSchema = joi.object({
  DATABASE_USER: joi.string().required(),
  DATABASE_HOST: joi.string().required(),
  DATABASE_NAME: joi.string().required(),
  DATABASE_PASSWORD: joi.string().required(),
  DATABASE_PORT: joi.number().required(),
});
