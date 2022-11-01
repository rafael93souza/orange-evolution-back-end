const express = require("express");
const { controllerTest } = require("../controllers/controllersTest");
const { middlewaresTest } = require("../middlewares/middlewaresTest");
const router = express();


router.get("/user", middlewaresTest, controllerTest);

module.exports = router;
