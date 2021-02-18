const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(
      `http://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}`
    );
    if (response.data) {
      const sortedCharacters = response.data.results.sort((a, b) => {
        return a - b;
      });
      res.status(200).json(sortedCharacters);
    } else {
      res.status(400).json({ message: "something went wrong" });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
