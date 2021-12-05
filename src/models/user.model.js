const mongoose = require('mongoose');

const User = mongoose.model(
    'User',
    new mongoose.Schema({
        username: {type: String, unique: true},
        password: String
    })
)

module.exports = {
    User
}