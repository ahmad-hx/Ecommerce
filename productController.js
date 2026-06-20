exports.getProducts = (req, res) => {
  res.json([{ name: "Sample Product", price: 100 }]);
};