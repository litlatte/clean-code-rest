const { buildMakeUser } = require("./user");
const bcrypt = require('bcrypt');
const { validateUsername, validatePassword } = require("./user.validators");

async function hash(data){
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(data, salt);
}

const makeUser = buildMakeUser(hash, 60, validateUsername, validatePassword);

module.exports = {
    makeUser
};