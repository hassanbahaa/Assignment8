import { Router } from "express";
import { createCollection } from "./book.controller.js";
const router = Router();
router.post("/", createCollection);
export default router;
