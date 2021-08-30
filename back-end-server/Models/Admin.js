
var mongoose = require('mongoose');


var adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        requied: true,
        unique: true
    },
    contact: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    home_address: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    confirm_password: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Admin", adminSchema);