const mongoose = require("mongoose");

const FavoriteCharacter = mongoose.model("favorite-character", {
  name: String,
  description: String,
  // thumbnail: {
  //   type: mongoose.Schema.Types.Mixed,
  //   default: {},
  // },
  thumbnail: {
    path: String,
    extension: String,
  },
  comics: [],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

//export model FavoriteCharacter
module.exports = FavoriteCharacter;
