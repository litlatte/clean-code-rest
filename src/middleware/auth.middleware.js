function buildRequireAuth(verifyToken) {
  return (req, res, next) => {
    let token = req.headers["authorization"];
    // check json web token exists & is verified
    if (token) {
      try {
        token = token.split(" ")[1];
      } catch {
        res.json({ status: 401, message: "Anautorized" });
      }
      verifyToken(token, (err, decodedToken) => {
        if (err) {
          console.log(err.message);
          res.json({ status: 401, message: "Anautorized" });
        } else {
          req.user = decodedToken.username;
          next();
        }
      });
    } else {
      res.json({ status: 401, message: "Anautorized" });
    }
  };
}
module.exports = { buildRequireAuth };
