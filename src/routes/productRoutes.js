const express = require("express");
const  {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController ");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/products", protect, getProducts);
router.post("/products", createProduct);
router.get("/products/:productId", getProductById);
router.put("/products/:productId", updateProduct);
router.delete("/products/:productId", deleteProduct);

module.exports = {router};
