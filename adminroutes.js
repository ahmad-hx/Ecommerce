const express = require("express");
const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");
const { addProduct, getAllOrders } = require("../controllers/adminController");

const router = express.Router();

router.post("/product", auth, admin, addProduct);
router.get("/orders", auth, admin, getAllOrders);

module.exports = router;