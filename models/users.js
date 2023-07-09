const mongoose = require ('mongoose');

const usersSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    phonenumber: Number
});
module.exports= mongoose.model('users', usersSchema);