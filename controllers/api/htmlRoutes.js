const path = require("path");
const router = require("express").Router();

// GET Route for homepage
router.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

router.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

router.get("*", (req, res) => {
  res.sendFile(path.join(_dirname, "public/index.html"));
});

module.exports = router;
