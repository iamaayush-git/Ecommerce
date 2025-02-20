import app from "./src/app.js";
import connectDB from "./src/config/db.js";

const startServer = async () => {
  await connectDB();
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
  })
}

startServer();