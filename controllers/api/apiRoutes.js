const path = require("path");
const router = require("express").Router();
const fs = require("fs");

const createNewNote = (body, notesArray) => {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notesArray })
  );
  return note;
}

router.get("api/notes/:id", (req, res) => {
  res.json(notes[req.params.id]);
});

router.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    var notes = JSON.parse(data);
    res.json(notes);
  });
});
router.post("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf-8");
});
