const express = require("express");
const { connectToDatabase } = require("./db");
const app = express();
const { apiRoute } = require("./routes");
const PORT = process.env.PORT || 8080;
require('dotenv').config();
function startAPI() {
  app.get("/", (req, res) => {
    res.send("Hello :)");
  });
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use("/api/v1/", apiRoute);
  app.listen(PORT, () => {
    console.log(`Server started http://127.0.0.1:${PORT}/`);
  });
}

connectToDatabase(startAPI);
