const Joi = require('@hapi/joi');

const emailSchema = Joi.string().email().required();
const zipCodeSchema = Joi.string().trim().pattern(/^\d{6}$/).required();
const idSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createSchema = Joi.object({
    email: emailSchema,
    name: Joi.string().required(),
    age: Joi.number().required(),
    city: Joi.string().required(),
    zipCode: zipCodeSchema,
  
});

const updateSchema = Joi.object({

    userId: idSchema,
    email: Joi.string().email(),
    name: Joi.string(),
    age: Joi.number(),
    city: Joi.string(),
    zipCode: Joi.string().trim().pattern(/^\d{6}$/)

});

const deleteSchema = Joi.object({
    userId: idSchema
});

module.exports = {createSchema, updateSchema, deleteSchema} ;