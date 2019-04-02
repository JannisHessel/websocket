const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{
        type: String
    },
    password:{
        type: String
    }
})



modules.exports = UserSchema;