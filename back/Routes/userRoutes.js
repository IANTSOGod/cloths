const express = require("express");
const router = express.Router();
const User = require("../Models/Users");

router.get("/api/users/list", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;