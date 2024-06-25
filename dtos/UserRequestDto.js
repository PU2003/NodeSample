const Joi = require('@hapi/joi');

const emailSchema = Joi.string().email().required();
const zipCodeSchema = Joi.string().trim().pattern(/^\d{6}$/).required();
const idSchema = Joi.string().length(24).hex().required();

const createSchema = Joi.object({
  email: emailSchema,
  zipCode: zipCodeSchema
});

const updateSchema = Joi.object({
  id: idSchema,
  email: emailSchema,
  zipCode: zipCodeSchema
});

const deleteSchema = Joi.object({
  id: idSchema
});

module.exports = createSchema, updateSchema, deleteSchema ;