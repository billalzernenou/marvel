const express = require("express");
const formidable = require("express-formidable");
cors = require("cors");
require("dotenv").config();
const app = express();
app.use(formidable());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Marvel Billal ZERNENOU" });
});
// import routes
const charactersRoute = require("./routes/characters");
const comicsRoute = require("./routes/comics");
app.use(charactersRoute);
app.use(comicsRoute);

app.all("*", (req, res) => {
  res.status(404).send("page not found");
});
// 8kHCqGjYF0tCCQ8M
app.listen(3000, () => {
  console.log("server started");
});
