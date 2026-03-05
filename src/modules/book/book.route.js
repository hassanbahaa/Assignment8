import { Router } from "express";
import { InsertOneBookController } from "./book.controller.js";
const router = Router();

router.post("/", InsertOneBookController);
export default router;
