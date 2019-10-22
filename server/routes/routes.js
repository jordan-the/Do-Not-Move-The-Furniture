//This file is done by Qifan Tang
//It is for setting different routers

var express = require("express");
var router = express.Router();
var controller = require("../controllers/controller");


//require multer and set up
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "uploads/")
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString().slice(0,10) + file.originalname);
    }
});

const upload = multer({storage: storage});

//artifacts api
router.get("/api/artifact", controller.getAllArtifact);

router.get("/api/artifact/:id", controller.getOneArtifact);

router.post("/api/artifact", controller.addArtifact);

router.post("/api/edit/artifact/:id", controller.editArtifact);

router.get("/api/artifact/delete/:id", controller.deleteArtifact);

//image api
router.post("/api/image/:id", upload.single("image"), controller.addImage);

router.get("/api/image/:id", controller.getImageByArtifact);

router.get("/api/image/delete/:id", controller.deleteImageById);

//category api
router.get("/api/category", controller.getCategory);

router.post("/api/category", controller.addCategory);

router.post("/api/category/:id", controller.editCategory);

router.get("/api/category/delete/:id", controller.deleteCategory);

//family api
router.get("/api/family", controller.getAllFamily);

router.get("/api/family/:id", controller.getOneFamily);

router.post("/api/family", controller.addFamily);

router.post("/api/family/:id", controller.editFamily);

router.get("/api/family/delete/:id", controller.deleteFamily);

//user api
router.get("/api/user", controller.getUser);

router.get("/api/user/:id", controller.getUserByID);

router.get("/api/user/email/:email", controller.getUserByEmail);

router.post("/api/user", controller.addUser);

router.post("/api/user/:id", controller.editUser);

//ac relationshiop api
router.get("/api/relationship", controller.getRelationship);

router.get("/api/relationship/category", controller.getRelationshipByCategory);

router.get("/api/relationship/artifact/:id", controller.getRelationshipByArtifact);

router.get("/api/relationship/:id", controller.getRelationshipById);

router.post("/api/relationship", controller.addRelationship);

router.get("/api/relationship/delete/:id", controller.deleteRelationship);

//checking connection
router.get("/api", controller.checkConnection);
router.post("/api", controller.testPost);
router.post("/api/addFakeImage/:id", controller.addFakeImage);


module.exports = router;

