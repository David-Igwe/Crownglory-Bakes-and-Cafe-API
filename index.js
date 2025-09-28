if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const menu = require("./menu/menu.js");
const Order = require("./order/order.js");

//CONNECTING TO DATABASE TO PROCESS ORDERS
const mongoose = require('mongoose');
const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', () => {
    console.log('Database connected');
});

const app = express();

app.get("/menu", (req, res) => {
  res.send(menu);
});

app.get("/order/:_id", async (req, res) => {
  const { _id } = req.params;
  const order = await Order.findById(_id);
  res.send(order);
});

app.post("/order/new", async (req, res) => {
  const newOrder = new Order(req.body);
  await newOrder.save();
  res.end();
});

app.patch("/order/:_id", async (req, res) => {
  const { _id } = req.params;
  await Order.findByIdAndUpdate(_id, req.body);
  res.end();
});

app.listen(3000, () => {
  console.log("Serving on port 3000");
});
