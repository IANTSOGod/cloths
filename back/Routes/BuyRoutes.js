const express = require("express");
const router = express.Router();
const Buy = require("../Models/Buy");

router.get("/api/buy/list", async (req, res) => {
  try {
    const Buys = await Buy.find();
    res.status(200).json(Buys);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.post("/api/buy/inscr", async (req, res) => {
  try {
    await Buy.insertMany(req);
    res.status(200).send({ message: "Donnée inséree" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
