const express = require("express");
const formidable = require("express-formidable");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
cors = require("cors");
require("dotenv").config();
const app = express();
app.use(formidable());
app.use(cors());
// connect database
// BDD connect
mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

// config cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_PUBLIC_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Marvel Billal ZERNENOU" });
});
// import routes
const charactersRoute = require("./routes/characters");
const comicsRoute = require("./routes/comics");
const userRoute = require("./routes/user");
const favoriteCharacterRoute = require("./routes/favoriteCharacter");
app.use(charactersRoute);
app.use(comicsRoute);
app.use(userRoute);
app.use(favoriteCharacterRoute);

app.all("*", (req, res) => {
  res.status(404).send("page not found");
});
// 8kHCqGjYF0tCCQ8M
app.listen(process.env.PORT, () => {
  console.log("server started");
});
