const mongoose = require("mongoose");
const OrderSchema = mongoose.model(
  "Order",
  new mongoose.Schema(
    {
      orderData: [
        {
          productId: {
            type: String,
            required: true,
          },
          name: {
            type: String,
            required: true,
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
    },
    { timestamps: { type: new Date(), required: true } }
  )
);

module.exports = {
  OrderSchema,
};

// const mongoose = require("mongoose");

// const OrderSchema = new mongoose.Schema(
//   {
//     orderData: [
//       {
//         productId: {
//           type: String,
//           required: true,
//           sparse: true,
//         },
//         name: {
//           type: String,
//           required: true,
//         },
//         picture: {
//           type: String,
//         },
//         quantity: {
//           type: Number,
//           required: true,
//         },
//         price: {
//           type: Number,
//           required: true,
//         },
//         totalPrice: {
//           type: Number,
//           required: true,
//         },
//       },
//     ],
//   },

//   { timestamps: { type: new Date(), required: true } }
// );

// module.exports = {
//   OrderSchema: mongoose.model("orders", OrderSchema),
// };
