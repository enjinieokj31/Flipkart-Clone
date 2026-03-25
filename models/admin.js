const { Schema, model } = require('mongoose');

const adminSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'ADMIN',
    }

},{timestamps: true});

const Admin = model('admin',adminSchema);

module.exports = Admin;