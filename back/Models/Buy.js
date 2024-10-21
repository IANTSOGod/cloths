const mongoose = require("mongoose");

const BuySchema = new mongoose.Schema(
  {
    buy_id: Number,
    product_id: Number,
    user_id: String,
    number: Number,
  },
  { collection: "Buy" }
);

const Buy = mongoose.model("Buy", BuySchema);

module.exports = Buy;
