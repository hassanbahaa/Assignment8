import { Router } from "express";
import { createCollection } from "./log.controller.js";
const router = Router();
router.post("/capped", createCollection);
export default router;
