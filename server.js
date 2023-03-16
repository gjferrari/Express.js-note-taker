// required modules
const express = require("express");
const path = require("path");

const app = express();

const apiRoutes = require("./controllers/api/apiRoutes");
// const htmlRoutes = require("./controllers/api/htmlRoutes");

const PORT = process.env.PORT || 3001;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/api", apiRoutes);
// // Route for HTML calls
// app.use("/", htmlRoutes);

app.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    var notes = JSON.parse(data);
    res.json(notes);
  });
});
app.post("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf-8");
});

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
// verifies the server connected to the port properly
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// const express = require("express");
// const router = require("express").Router();
// const fs = require("fs");
// const path = require("path");
// // const apiRoutes = require("./controllers/api");
// // const htmlRoutes = require("./controllers/api");

// // const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware for parsing JSON and urlencoded form data
// router.use(express.json());
// router.use(express.urlencoded({ extended: true }));

// //creates route for public folder
// router.use(express.static("public"));

// // //use api routes
// // router.use("/api", apiRoutes);
// // router.use("/", htmlRoutes);

// router.get("api/notes/:id", (req, res) => {
//   res.json(notes[req.params.id]);
// });

// router.get("/api/notes", (req, res) => {
//   fs.readFile("./db/db.json", "utf8", (err, data) => {
//     if (err) throw err;
//     var notes = JSON.parse(data);
//     res.json(notes);
//   });
// });
// router.post("/api/notes", (req, res) => {
//   fs.readFile("./db/db.json", "utf-8");
// });

// router.get("/", (req, res) =>
//   res.sendFile(path.join(__dirname, "/public/index.html"))
// );

// router.get("/notes", (req, res) =>
//   res.sendFile(path.join(__dirname, "/public/notes.html"))
// );

// router.get("*", (req, res) => {
//   res.sendFile(path.join(_dirname, "public/index.html"));
// });

// router.listen(PORT, () =>
//   console.log(`Example app listening at http://localhost:${PORT}`)
// );
