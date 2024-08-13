const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const asyncHandler = require("express-async-handler");


// configure cloudinary 
cloudinary.config({
  cloud_name: process.env.APP_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.APP_CLOUDINARY_API_KEY,
  api_secret: process.env.APP_CLOUDINARY_SECRET_KEY,
});


const uploadMultiple = asyncHandler(async (req, res, next) => {
  try {
    const images = req.files;
    console.log(images);
    const imageUrls = [];

    for (const image of images) {
      const result = await cloudinary.uploader.upload(image.path, {
        resource_type: "auto"
      });

      imageUrls.push(result.secure_url);
    }
    
    req.images = imageUrls;
    console.log(res.images);
    next();

  } catch (error) {
    console.log(error);
    res.status(500).send(`Internal error at: uploadMultiple.js - ${error}`);
  }
});

module.exports = uploadMultiple;