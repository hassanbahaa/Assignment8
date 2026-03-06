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
  booksAggregateOneController,
  booksAggregateTwoController,
  booksAggregateThreeController,
  booksAggregateFourController,
} from "./book.controller.js";
const router = Router();

router.post("/", InsertOneBookController);
router.get("/title", getBookController);
router.get("/year", getBooksByYearController);
router.get("/genre", getBooksByGenreController);
router.get("/skip-limit", skipLimitController);
router.get("/year-integer", findBookswithIntController);
router.get("/exclude-genres", findBooksNotInGenresController);
router.get("/aggregate1", booksAggregateOneController);
router.get("/aggregate2", booksAggregateTwoController);
router.get("/aggregate3", booksAggregateThreeController);
router.get("/aggregate4", booksAggregateFourController);
router.delete("/before-year", deleteBooksBeforeYearController);
router.post("/batch", InsertManyBooksController);
router.patch("/:title", UpdateBookController);
export default router;
