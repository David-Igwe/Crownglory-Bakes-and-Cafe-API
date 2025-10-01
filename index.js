const express = require("express");
const Category = require("./models/category.js");
const Item = require("./models/item.js");


//CONNECTING TO DATABASE TO PROCESS ORDERS
const connectDB = require("./utils/connectDB.js");
connectDB();

const app = express();

//CORS HANDLING
const cors = require("cors");

// Enable CORS for all routes and origins
app.use(cors());

app.get("/menu", async (req, res) => {
  const menu = await Category.find({});
  res.send(menu);
});

app.get("/menu/:categoryName", async (req, res) => {
  const {categoryName} = req.params
  const category = await Category.findOne({name: categoryName}).populate('items');
  res.send(category);
});

app.get("/menu/:categoryName/:itemId", async (req, res) => {
  const {itemId} = req.params
  const item = await Item.findById(itemId)
  res.send(item)
});

// app.get("/order/:_id", async (req, res) => {
//   const { _id } = req.params;
//   const order = await Order.findById(_id);
//   res.send(order);
// });

// app.post("/order/new", async (req, res) => {
//   const newOrder = new Order(req.body);
//   await newOrder.save();
//   res.end();
// });

// app.patch("/order/:_id", async (req, res) => {
//   const { _id } = req.params;
//   await Order.findByIdAndUpdate(_id, req.body);
//   res.end();
// });

app.listen(3000, () => {
  console.log("Serving on port 3000");
});
