const mongoose = require('mongoose');

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});


module.exports = mongoose.model("users",userSchema);
