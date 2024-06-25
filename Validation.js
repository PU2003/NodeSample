const Joi = require('@hapi/joi')

const authSchema = Joi.object({
    
    _id: Joi.string().length(24).hex().required(),
    email:Joi.string().email().lowercase().required(),
    zipCode: Joi.string()
        .trim()
        .pattern(/^\d{6}$/) 
        .required()

})

module.exports = authSchema;                          // defining it like an object because we can have multiple schemas