exports.makePayment = (req, res) => {
  res.json({
    success: true,
    message: "Payment successful",
    transactionId: Date.now(),
  });
};