const express = require("express");
const auth = require("../middleware/authMiddleware");
const { makePayment } = require("../controllers/paymentController");

const router = express.Router();

router.post("/", auth, makePayment);

module.exports = router;