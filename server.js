const express = require("express");
const router = require("express").Router();
const fs = require("fs");
const path = require("path");
// const apiRoutes = require("./controllers/api");
// const htmlRoutes = require("./controllers/api");

// const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and urlencoded form data
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

//creates route for public folder
router.use(express.static("public"));

// //use api routes
// router.use("/api", apiRoutes);
// router.use("/", htmlRoutes);

router.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
