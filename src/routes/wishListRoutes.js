const express = require("express");
const {
  addToWishList,
  getWishList,
  removeWishListItem,
} = require("../controllers/wishListController ");

const router = express.Router();

router.post("/", addToWishList);
router.get("/", getWishList);
router.delete("/:itemId", removeWishListItem);

module.exports = {router};
