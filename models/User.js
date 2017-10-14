const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

let userSchema = mongoose.Schema({
    password: {
        type: String
    },
    email: {
        type: String
    },
    name: {
        type: String
    }
})

let User = module.exports = mongoose.model('User', userSchema);

module.exports.createUser = function(newUser, callback) {bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
        newUser.password = hash
        newUser.save(callback) 
    });
})};