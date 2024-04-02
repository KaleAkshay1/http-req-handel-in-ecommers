import mongoose from "mongoose";

const ratings = mongoose.Schema({
  rate: Number,
  count: Number,
});

const recycleSchema = mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: ratings,
});

export const Recycle = mongoose.model("Recycle", recycleSchema);
