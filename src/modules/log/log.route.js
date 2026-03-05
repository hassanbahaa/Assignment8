import { Router } from "express";
import { InsertLogController } from "./log.controller.js";
const router = Router();
router.post("/", InsertLogController);
export default router;
