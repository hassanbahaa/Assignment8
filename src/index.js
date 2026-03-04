import express from "express";
import { connectDB } from "./db/connect.js";
import bookRoute from "./modules/book/book.route.js";
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());
connectDB();
app.use("/collection/books", bookRoute);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
