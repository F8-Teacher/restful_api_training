const mongoose = require("mongoose");
const { Schema } = mongoose;

const products = {
  name: String,
  price: Number,
  description: String,
  createAt: Date,
  updateAt: Date,
};

const productSchema = new Schema(products, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
