const express = require("express");
const { login, signup } = require("../controllers");
const { makeExpressCallback } = require("../express-callback");
const { makeAuthRoutes } = require("./auth.routes");
//const { requireAuth } = require("../middleware"); //Authentication middleware
const Router = express.Router;

let apiRoute = Router();
apiRoute.use(
  "/auth",
  makeAuthRoutes(
    Router(),
    makeExpressCallback(login),
    makeExpressCallback(signup)
  )
);
apiRoute.get("/", (req, res) => {
  res.send("api");
});
/*
To implement a route that requires authentication use the requireAuth middleware
(make sure to import it: see line 5)
EXAMPLE:

apiRoute.get("/secret", requireAuth, (req, res)=>{
    res.send(`Hey ${req.user} :)`)
})*/
module.exports = {
  apiRoute,
};
