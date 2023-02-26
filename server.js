const express = require("express");
const fs = require("fs");
const path = require("path");
const apiRoutes = require("./controllers/api");
const htmlRoutes = require("./controllers/api");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//creates route for public folder
app.use(express.static("public"));

//use api routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
