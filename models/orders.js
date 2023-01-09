// define modules
const Joi = require('joi');
const mongoose = require('mongoose');

// define schema
const Order = mongoose.model('Order', mongoose.Schema({
    employee: { 
        type: String, 
        required: true,
        minlength: 4,
        maxlength: 50
    },
    department: { 
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 50
    },
    labels: { 
        type: Array,
        require: true,
    },
    lead: { 
        type: String, 
        required: true,
        minlength: 4,
        maxlength: 50
    },
    group: { 
        type: String, 
        required: true,
        minlength: 4,
        maxlength: 50
    },
    status: { 
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 50
    },
    date: { type: Date, 
        default: () => Date.now() - 6*60*60*1000
    }
}));

// function to validate orders
function validateOrder(order) {
    const schema = {
        employee: Joi.string().min(4).max(50).required(),
        department: Joi.string().min(5).max(50).required(),
        labels: Joi.array().required(),
        lead: Joi.string().min(4).max(50).required(),
        group: Joi.string().min(4).max(50).required(),
        status: Joi.string().min(5).max(50).required()
    };
    return Joi.validate(order, schema);
}

module.exports.Order = Order;
module.exports.validate = validateOrder;