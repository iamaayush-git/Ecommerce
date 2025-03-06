import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: [true, "product description is required"],
  },
  price: {
    type: Number,
    required: [true, "product price is required"],
    min: [0, "price cannot be negative"],
  },
  category: {
    type: String,
    required: [true, "product category is required"],
  },
  image: [
    {
      url: { type: String, required: true }
    }
  ]
}, { timestamps: true })

const productModel = mongoose.model("product", productSchema);
export default productModel;