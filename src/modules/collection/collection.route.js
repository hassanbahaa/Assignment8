import { Router } from "express";
import {
  createCollection,
  CreateIndexController,
  implicitCollectionController,
  createLogsColController,
} from "./collection.controller.js";
const router = Router();
router.post("/books", createCollection);
router.post("/books/index", CreateIndexController);
router.post("/authors", implicitCollectionController);
router.post("/logs/capped", createLogsColController);
export default router;
