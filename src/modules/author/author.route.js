import { Router } from "express";
import { InsertAuthor } from "./author.controller.js";
const router = Router();
router.post("/", InsertAuthor);
export default router;
