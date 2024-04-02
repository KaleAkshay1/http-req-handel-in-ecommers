import express from "express";
import { Product } from "../model/product.js";
import { Recycle } from "../model/recycle.model.js";

const route = express.Router();

route.get("/", async (req, res) => {
  const data = await Product.find({});
  res.render("index", { product: data });
});

route.get("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const a = await Product.findOneAndDelete({ _id: id });
  Recycle.create(a._doc);
  console.log(a._doc);
  res.redirect("/");
});

route.get("/history", async (req, res) => {
  const data = await Recycle.find();
  res.render("history", { product: data });
});

route.get("/create", async (req, res) => {
  const a = await Product.aggregate([
    {
      $group: {
        _id: "$category", // Field to group by
      },
    },
  ]);
  res.render("create_form", { data: a });
});

route.post("/create", async (req, res) => {
  await Product.create({
    title: req.body.title,
    price: req.body.price,
    category: req.body.category,
    image: req.body.image,
    rating: {
      rate: 0,
      count: 0,
    },
  });
  res.redirect("/");
});

route.get("/restore/:id", async (req, res) => {
  const a = await Recycle.findOneAndDelete(req.params.id);
  console.log(a._doc);
  await Product.create(a._doc);
  res.redirect("/");
});

route.get("/update/:id", async (req, res) => {
  const a = await Product.findById(req.params.id);
  res.render("update", { data: a });
});

route.post("/update_data", async (req, res) => {
  let a = await Product.findByIdAndUpdate(req.body.id, {
    title: req.body.title,
    image: req.body.image,
    price: req.body.price,
  });
  res.redirect("/");
});

export default route;
