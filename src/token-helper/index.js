const jwt = require("jsonwebtoken");
const JWT_SECRET = "my-super-secret" || process.env.JWT_SECRET;
function generateToken(data) {
  return jwt.sign({ username: data.username }, JWT_SECRET);
}
function verifyToken(token, callback) {
  jwt.verify(token, JWT_SECRET, callback);
}

module.exports = {
  generateToken,
  verifyToken,
};
