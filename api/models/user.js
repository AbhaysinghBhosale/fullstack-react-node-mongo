const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
        index: true,
    },
    email:{
        type:String,
        required: true,
        index: true
    },
    phone:{
        type:String,
        required: false,
    }
}, {timestamps: true} );

module.exports = mongoose.model("User",userSchema)