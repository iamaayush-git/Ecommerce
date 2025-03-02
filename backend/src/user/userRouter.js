import express from "express";
import { loginController, signUpController } from "./userController.js";

const userRouter = express.Router();

userRouter.post('/signup', signUpController)
userRouter.post('/login', loginController)


export default userRouter;