const cartItem = require("../models/cartItemModel");

const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    let cartItem = await cartItem.findOne({
      userId: req.user.id,
      productId: productId,
    });

    if (cartItem) {
      cartItem.quantity += quantity || 1;
      await cartItem.save();
    } else {
      cartItem = await cartItem.create({
        userId: req.user.id,
        productId: productId,
        quantity: quantity || 1,
      });
    }

    res.status(200).json({
      message: "Product added to cart",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal server error",
    });
  }
};

const getCart = async (req, res) => {
  try {
    const cartItems = await cartItem.find({ userId: req.user.id }).populate(
      "productId"
    );

    res.status(200).json({
      message: "Cart fetched",
      cart: cartItems,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal server error",
    });
  }
};

const removeCartItem = async (req, res) => {
  try {
    const { ItemId } = req.params;

    await CartItem.findByIdAndDelete(ItemId);

    res.status(200).json({
      message: "Item removed from the cart",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal server error",
    });
  }
};

module.exports = { addToCart, getCart, removeCartItem };
