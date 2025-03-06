import express from "express";
import { createProduct } from "../product/productController.js"

const productRouter = express.Router();

productRouter.post("/create", createProduct)

export default productRouter;