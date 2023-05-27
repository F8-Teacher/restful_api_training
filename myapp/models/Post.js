const mongoose = require("mongoose");
const { Schema } = mongoose;

const posts = {
  title: String,
  content: String,
  createAt: Date,
  updateAt: Date,
};

const postSchema = new Schema(posts, { timestamps: true });

module.exports = mongoose.model("Post", postSchema);
