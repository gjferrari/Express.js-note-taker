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
};
