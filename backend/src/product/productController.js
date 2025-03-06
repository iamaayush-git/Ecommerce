import createHttpError from "http-errors";
import productModel from "./productModel.js";

const createProduct = async (req, res, next) => {
  try {
    const { title, description, price, category } = req.body;
    if (!title || !description || !price || !category) {
      next(createHttpError(400, "All fields are required"));
    }

    const newProduct = await productModel.create({
      title,
      description,
      price,
      category
    })

  } catch (error) {

  }

}

export { createProduct }