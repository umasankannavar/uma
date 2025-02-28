const express = require("express");
const {
  addToCart,
  getCart,
  removeCartItem,
} = require("../controllers/cartController ");

const router = express.Router();

router.post("/", addToCart);
router.get("/", getCart);
router.delete("/:itemId", removeCartItem);

module.exports = {router};
