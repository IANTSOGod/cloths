const express = require("express");
const router = express.Router();
const Status = require("../Models/Status");

router.get("/api/status/list", async (req, res) => {
  try {
    const StatusList = await Status.find();
    res.status(200).json(StatusList);
  } catch (error) {
    res.status(200).json({ message: error });
  }
});

module.exports = router;
