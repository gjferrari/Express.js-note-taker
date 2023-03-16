const path = require("path");
const router = require("express").Router();
const fs = require("fs");
// const uuid = require("uuid/v1");
const { resolve } = require("path");

const dbPath = "db/db.json";

const notes = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(dbPath, "utf8", (err, data) => {
      if (err) {
        reject(dbPath);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
};
const createNewNote = () => {
  return new Promise((resolve, reject) => {
    fs.writeFile(dbPath, JSON.stringify(data), "utf-8", (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
};

router.get("/notes", (req, res) => {
  notes()
    .then((notes) => res.json(notes))
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});


router.post("/notes", (req, res) => {
  notes();
  let newNote = {
    title: req.body.title,
    text: req.body.text,
  };
  createNewNote(newNote);
});

// router.post("/notes", (req, res) => {
//   notes();
//   createNewNote()
//     .then((newNote) => res.json(newNote))
//     .catch((err) =>
//       res.status(500).json({
//         error: err,
//       })
//     );
// });

// router.get("api/notes/:id", (req, res) => {
//   res.json(notes[req.params.id]);
// });

// router.get("/notes", (req, res) => {
//   fs.readFile("./db/db.json", "utf8", (err, data) => {
//     if (err) throw err;
//     var notes = JSON.parse(data);
//     res.json(notes);
//   });
// });
router.post("/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf-8");
});
module.exports = router;
