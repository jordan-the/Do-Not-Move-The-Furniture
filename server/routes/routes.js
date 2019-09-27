//This file is done by Qifan Tang
//It is for setting different routers

var express = require("express");
var router = express.Router();
var controller = require("../controllers/controller");

//coming soon page
router.get("/",controller.coming);


module.exports = router;

