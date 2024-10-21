const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    datenaiss: String,
    user_id: String,
  },
  { collection: "Users" }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
