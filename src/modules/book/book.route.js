import { Router } from "express";
import {
  InsertManyBooksController,
  InsertOneBookController,
} from "./book.controller.js";
const router = Router();

router.post("/", InsertOneBookController);
router.post("/batch", InsertManyBooksController);
export default router;
