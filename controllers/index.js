const router = require("express").Router();

//code borrowed from Project 2
import apiRoutes from "./api/apiRoutes";
import htmlRoutes from "./api/htmlRoutes";

router.use("/api", apiRoutes);
router.use("/htmlRoutes", htmlRoutes);

export default router;
