//This file is done by Qifan Tang
//It is for setting different routers

const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

//coming soon page
router.get("/",controller.coming);


module.exports = router;

