import express from "express";
import { connectDB } from "./db/connect";
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
