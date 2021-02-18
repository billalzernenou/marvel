const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics", async (req, res) => {
  try {
    console.log(req.query.limit);
    const response = await axios.get(
      `http://lereacteur-marvel-api.herokuapp.com/comics?limit=${req.query.limit}&skip=${req.query.skip}&apiKey=${process.env.MARVEL_API_KEY}`
    );
    if (response.data) {
      res.status(200).json(response.data);
    } else {
      res.status(400).json({ message: "something went wrong" });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/comics/:characterId", async (req, res) => {
  try {
    const response = await axios.get(
      `http://lereacteur-marvel-api.herokuapp.com/comics/${req.params.characterId}?apiKey=${process.env.MARVEL_API_KEY}`
    );
    if (response.data) {
      res.status(200).json(response.data);
    } else {
      res.status(400).json({ message: "something went wrong" });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
