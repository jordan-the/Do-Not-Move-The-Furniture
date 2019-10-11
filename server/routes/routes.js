//This file is done by Qifan Tang
//It is for setting different routers

var express = require("express");
var router = express.Router();
var controller = require("../controllers/controller");

//artifacts api
router.get("/api/artifact", controller.getAllArtifact);

router.get("/api/artifact/:id", controller.getOneArtifact);

router.post("/api/artifact", controller.addArtifact);

router.post("/api/artifact/:id", controller.editArtifact);

router.get("/api/artifact/delete/:id", controller.deleteArtifact);

//image api
router.post("/api/image", controller.addImage);

router.get("/api/image/:id", controller.getImageByArtifact);

router.get("/api/image/delete/:id", controller.deleteImageById);

router.get("/api", controller.checkConnection);
module.exports = router;

