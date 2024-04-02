import mongoose from "mongoose";

const ratings = mongoose.Schema({
  rate: {
    type: Number,
    default: 0,
  },
  count: {
    type: Number,
    default: 0,
  },
});

const prooductSchema = mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: ratings,
});

export const Product = mongoose.model("Product", prooductSchema);
