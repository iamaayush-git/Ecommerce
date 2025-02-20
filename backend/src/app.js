import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

// routes
app.get('/', (req, res) => {
  res.json({
    message: "Helloworld"
  })
})

export default app;
