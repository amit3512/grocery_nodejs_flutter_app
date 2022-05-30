const mongoose = require("mongoose");
const CategorySchema = mongoose.model(
  "Category",
  new mongoose.Schema({
    categoryName: {
      type: String,
      required: true,
      unique: true,
    },
    categoryDescription: {
      type: String,
      required: false,
    },
    categoryImage: {
      type: String,
    },
  })
);

module.exports = {
  CategorySchema,
};
