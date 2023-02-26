const router = require("express").Router();

//code borrowed from Project 2
const apiRoutes = require("./api");
const htmlRoutes = require("./api");

router.use("/api", apiRoutes);
router.use("/htmlRoutes", htmlRoutes);

module.exports = router;
