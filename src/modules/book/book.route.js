import { Router } from "express";
import {
  InsertManyBooksController,
  InsertOneBookController,
  UpdateBookController,
  getBookController,
  getBooksByYearController,
  getBooksByGenreController,
  skipLimitController,
  findBookswithIntController,
  findBooksNotInGenresController,
  deleteBooksBeforeYearController,
} from "./book.controller.js";
const router = Router();

router.post("/", InsertOneBookController);
router.get("/title", getBookController);
router.get("/year", getBooksByYearController);
router.get("/genre", getBooksByGenreController);
router.get("/skip-limit", skipLimitController);
router.get("/year-integer", findBookswithIntController);
router.get("/exclude-genres", findBooksNotInGenresController);
router.delete("/before-year", deleteBooksBeforeYearController);
router.post("/batch", InsertManyBooksController);
router.patch("/:title", UpdateBookController);
export default router;
