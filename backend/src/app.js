import express from "express";
import dotenv, { config } from "dotenv";
import userRouter from "./user/userRouter.js";
import errorHandler from "./middleware/errorMiddleware.js"
import cors from "cors"
import productRouter from "./product/productRouter.js";

dotenv.config();
const app = express();
app.use(express.json())
app.use(cors())

// routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter)

app.use(errorHandler)

export default app;


// Just for example


// catch (error) {
//   if (error.name === "ValidationError") {
//     // If it's a validation error from MongoDB (e.g., invalid data format)
//     return next(createHttpError(400, "Invalid data format"));
//   }

//   // Catch all other errors (database connection errors, etc.)
//   return next(createHttpError(500, "Internal server error"));
// }