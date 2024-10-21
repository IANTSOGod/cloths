const express = require("express");
const router = express.Router();
const Product = require("../Models/Products");

router.get("/api/products/list", async (req, res) => {
  try {
    const Products = await Product.find();
    res.status(200).json(Products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
