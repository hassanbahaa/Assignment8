import { Router } from "express";
import { createCollection, CreateIndexController } from "./book.controller.js";
const router = Router();
router.post("/", createCollection);
router.post("/index", CreateIndexController);
export default router;
