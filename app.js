// app.js

const express = require("express");
const app = express();
const port = 3000;
const api = require("./src/api");

// For all queries to localhost:3000/api/...
// use the API router (see below)
app.use("/api", api);

// For any other route (URL) just send an error
app.get("*", (req, res) => {
  res.send({ error: "No route defined" });
});

module.exports = app;
