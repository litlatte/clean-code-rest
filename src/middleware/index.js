const { verifyToken } = require("../token-helper");
const { buildRequireAuth } = require("./auth.middleware");

const requireAuth = buildRequireAuth(verifyToken);

module.exports = {
    requireAuth,
}