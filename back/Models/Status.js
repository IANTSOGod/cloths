const mongoose = require("mongoose");

const StatusSchema = new mongoose.Schema(
  {
    status_id: Number,
    role: String,
    user_id: String,
  },
  { collection: "Status" }
);

const Status = mongoose.model("Status", StatusSchema);

module.exports = Status;
