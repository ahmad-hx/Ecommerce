const Product = require("../models/Product");
const Order = require("../models/Order");

exports.addProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
};

exports.getAllOrders = async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
};