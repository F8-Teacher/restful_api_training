const mongoose = require("mongoose");
const { Schema } = mongoose;

const users = {
  name: String,
  email: String,
  password: String,
  createAt: Date,
  updateAt: Date,
};

const userSchema = new Schema(users, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
