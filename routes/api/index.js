const router = require("express").Router();
const exampleRoutes = require("./example");

// Book routes
router.use("/contacts", exampleRoutes);

module.exports = router;
