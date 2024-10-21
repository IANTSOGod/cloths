const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    product_id: Number,
    name: String,
    category: String,
    number: Number,
    Price: Number,
  },
  {
    collection: "Products",
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
