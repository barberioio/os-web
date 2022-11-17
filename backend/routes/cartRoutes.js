const e = require("express");
const express = require("express");
const { Mongoose } = require("mongoose");
const Cart = require("../models/Cart");
const router = express.Router();

const getCart = async (req, res) => {
    try {
      const cart = await Cart.find();
      res.json(cart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  };
  
  const addCart = async (req, res) => {
    try {
      const cart = Cart.create({product_id: req.body.product_id});
  
      res.json(cart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  };

router.get("/", getCart);
router.post("/", addCart);

module.exports = router;

