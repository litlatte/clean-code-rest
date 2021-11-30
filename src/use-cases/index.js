const { buildAuthFunctions } = require("./user");
const {User} = require('../models');
const {makeUser} = require('../user');
module.exports = {
    ...buildAuthFunctions(User, makeUser)
};