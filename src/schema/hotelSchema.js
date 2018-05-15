const Joi  = require('joi'),

    hotelSchema = Joi.object().keys({
        'name': Joi.string().min(1).optional(),
        'city': Joi.string().min(1).optional(),
        'price': Joi.string().optional(),
        'date': Joi.string().optional(),
        'sort_by': Joi.string().optional(),
    });

module.exports = hotelSchema;
