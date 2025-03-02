import userModel from "./userModel.js";
import bcrypt from "bcrypt"
import createHttpError from "http-errors";
import jwt from "jsonwebtoken"


// signup controller
const signUpController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      const error = createHttpError(400, "All fields are required");
      return next(error);
    }

    if (name.length < 3) {
      return next(createHttpError(400, "Name must be at least 3 characters"))
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return next(createHttpError(400, "Invalid email format"))
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return next(createHttpError(400, "User already exists"));
    }

    if (password.length < 3) {
      return next(createHttpError(400, "Password must be atleast 3 character"))
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword
    })
    await newUser.save()

    return res.status(201).json({
      success: true,
      message: "User created successfully"
    })

  } catch (error) {
    console.log(error);
    return next(createHttpError(500, "Internal server error"));
  }
}

// login controller
const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(createHttpError(400, "All fields are required"))
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return next(createHttpError(401, "Email or password doesn't match"));
    }

    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return next(createHttpError(401, "Email or password doesn't match"));
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email
      }
    })
  } catch (error) {
    console.log(error);
    return next(createHttpError(500, "Internal server error"));
  }
}

export { signUpController, loginController }