const express = require("express");

const router = express.Router();

const imageUploadController = require("../controllers/imageUploadController");

router.post("/", imageUploadController.compress);

module.exports = router;
