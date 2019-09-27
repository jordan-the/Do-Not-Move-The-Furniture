//This file is done by Qifan Tang
//It is for setting different routers

var express = require("express");
var router = express.Router();
var controller = require("../controllers/controller");

//coming soon page
router.get("/",controller.coming);

router.get("/api/user",controller.coming);

router.post("/api/user",controller.coming);

router.get("/api/user/:id",controller.coming);

router.get("/api/artifact",controller.coming);

router.post("/api/artifact",controller.coming);

router.get("/api/artifact/:id",controller.coming);

router.get("/api/family",controller.coming);

router.post("/api/family",controller.coming);

router.get("/api/family/:id",controller.coming);

router.get("/api/category",controller.coming);

router.post("/api/category",controller.coming);

router.get("/api/category/:id",controller.coming);

router.get("/api/image",controller.coming);

router.get("/api/image/:id",controller.coming);

router.post("/api/image",controller.coming);



module.exports = router;

