//these separate routes were not working but could be corrected and used in a second build

const path = require("path");
const router = require("express").Router();
const fs = require("fs");
const db = require("../../db/db.json");
// const uuid = require("uuid/v1");
const { resolve } = require("path");

const dbPath = "db/db.json";

router.get("/notes", (req, res) => {
  const notes = db;
  res.json(notes);
});

router.post("/notes", (req, res) => {
  console.log("post note");
  console.log(req.body);
  const savedNotes = db;
  let newNote = {
    title: req.body.title,
    text: req.body.text,
  };
  savedNotes.push(newNote);
  console.log(savedNotes);
  fs.writeFileSync(
    path.join(__dirname, "./db/db.json"),
    JSON.stringify(savedNotes),
    (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    }
  );
  res.json(savedNotes);
  // createNewNote(newNote);
});

// const notes = () => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(dbPath, "utf8", (err, data) => {
//       if (err) {
//         reject(dbPath);
//       } else {
//         resolve(JSON.parse(data));
//       }
//     });
//   });
// };
// const createNewNote = () => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(dbPath, JSON.stringify(data), "utf-8", (err) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(true);
//       }
//     });
//   });
// };

// router.get("/notes", (req, res) => {
//   notes()
//     .then((notes) => res.json(notes))
//     .catch((err) =>
//       res.status(500).json({
//         error: err,
//       })
//     );
// });

// router.post("/notes", (req, res) => {
//   console.log("post note");
//   console.log(req.body);
//   const savedNotes = db;
//   let newNote = {
//     title: req.body.title,
//     text: req.body.text,
//   };
//   savedNotes.push(newNote);
//   console.log(savedNotes);
//   // createNewNote(newNote);
// });

module.exports = router;
