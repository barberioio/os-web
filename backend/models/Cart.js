const mongoose = require("mongoose");


const CartSchema = mongoose.Schema({
  product_id: {
    type: String,
    required: true,
  },
});

const Cart = mongoose.model("cart", CartSchema);

module.exports = Cart;