const router = require("express").Router();

//code borrowed from Project 2
const apiRoutes = require("./api/apiRoutes");
const htmlRoutes = require("./api/htmlRoutes");

router.use("/api", apiRoutes);
router.use("/htmlRoutes", htmlRoutes);

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
