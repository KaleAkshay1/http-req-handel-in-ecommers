import mongoose from "mongoose";

async function connections() {
  try {
    mongoose.connect("mongodb://localhost:27017/ejsPrac");
  } catch (error) {
    console.log(`Connection Error:   ${error}`);
  }
}

export default connections;
