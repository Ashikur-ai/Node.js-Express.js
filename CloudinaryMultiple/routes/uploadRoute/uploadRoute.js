const express = require("express");
const route = express.Router();
const upload = require("../../middlewares/multer/multer");
const uploadMultiple = require("../../middlewares/upload/uploadMultiple");

route.post("/create", upload.array("images"), uploadMultiple);

module.exports = route;