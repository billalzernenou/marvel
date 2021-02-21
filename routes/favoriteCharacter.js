const express = require("express");
const Mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
const router = express.Router();

//import model user
const favoriteCharacter = require("../models/FavoriteCharacter");
// isAuthenticated to add
router.post("/character/add", async (req, res) => {
  try {
    if (req.fields.name && req.fields.user) {
      const newCharacter = new favoriteCharacter();
      newCharacter.name = req.fields.name;
      newCharacter.user = req.fields.user;
      req.fields.description = req.fields.description;
      newCharacter.thumbnail.path = req.fields.path;
      newCharacter.thumbnail.extension = req.fields.extension;
      // if (req.files.picture) {
      //   const pictureToUpload = req.files.picture.path;
      //   const result = await cloudinary.uploader.upload(pictureToUpload, {
      //     folder: "marvel/favorite-character",
      //     public_id: newCharacter.id,
      //   });
      //   newCharacter.thumbnail.path = result.secure_url;
      // }
      await newCharacter.save();
      res.status(200).json(newCharacter);
    } else {
      res
        .status(400)
        .json({ message: "l'un des champs n'est pas bien rempli" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.get("/characters/favorites", async (req, res) => {
  try {
    const favoriteCharacters = await favoriteCharacter.find();
    res.json(favoriteCharacters);
  } catch (error) {
    response.status(400).json(message.error);
  }
});

module.exports = router;
