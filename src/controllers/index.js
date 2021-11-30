const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { buildLoginControllers } = require("./auth.controllers");
const { getUser, addUser } = require("../use-cases");
const {generateToken} = require('../token-helper');
async function checkPassword(password, enpassword) {
  return await bcrypt.compare(password, enpassword);
}

const { login, signup } = buildLoginControllers(
  getUser,
  addUser,
  generateToken,
  checkPassword
);

module.exports = {
  login,
  signup,
};
