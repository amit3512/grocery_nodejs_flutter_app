const mongoose = require("mongoose");
const OrderSchema = mongoose.model(
  "Order",
  new mongoose.Schema({
    // productId: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    // name: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    // picture: {
    //   type: String,
    // },
    // quantity: {
    //   type: Number,
    //   required: true,
    // },
    // price: {
    //   type: Number,
    //   required: true,
    // },
    // totalPrice: {
    //   type: Number,
    //   required: true,
    // },
    orderData: [
      {
        productId: {
          type: String,
          required: true,
          // unique: true,
        },
        name: {
          type: String,
          required: true,
          // unique: true,
        },
        picture: {
          type: String,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        totalPrice: {
          type: Number,
          required: true,
        },
      },
    ],
  })
);

module.exports = {
  OrderSchema,
};
