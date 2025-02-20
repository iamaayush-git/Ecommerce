import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("db connection successful"))
    .catch((err) => {
      console.log(err)
      process.exit(1);
    });
};

export default connectDB;
