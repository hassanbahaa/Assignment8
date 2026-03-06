import { Book } from "../../db/models/book.model.js";

export const InsertOneBook = async (book) => {
  const insert = await Book.insertOne(book);

  if (!insert) throw new Error("Error inserting the document", { cause: 500 });
  return insert;
};

export const InsertManyBooks = async (books) => {
  const insert = await Book.insertMany(books);
  if (!insert) throw new Error("Error inserting the documents", { cause: 500 });
  return insert;
};

export const UpdateBookByTitle = async (title, update) => {
  const updateResult = await Book.updateOne({ title }, { $set: update });
  if (!updateResult)
    throw new Error("Error updating the document", { cause: 500 });
  return updateResult;
};

export const getBookByTitle = async (title) => {
  const book = await Book.findOne({ title });
  if (!book) throw new Error("Book not found", { cause: 404 });
  return book;
};

export const getBooksByYear = async (from, to) => {
  const books = await Book.find({ year: { $gte: from, $lte: to } }).toArray();
  if (!books || books.length === 0)
    throw new Error("No books found in the given year range", { cause: 404 });
  return books;
};

export const getBooksByGenre = async (genres) => {
  const books = await Book.find({ genres }).toArray();
  if (!books || books.length === 0)
    throw new Error("No books found in the given genre", { cause: 404 });
  return books;
};

export const getBooksWithPagination = async () => {
  const books = await Book.find().skip(2).limit(3).sort({ year: -1 }).toArray();
  if (!books || books.length === 0)
    throw new Error("No books found with the given pagination", { cause: 404 });
  return books;
};

export const findBookswithInt = async () => {
  const books = await Book.find({ year: { $type: "int" } }).toArray();
  if (!books || books.length === 0)
    throw new Error("No books found with year as integer", { cause: 404 });
  return books;
};

export const findBooksNotInGenres = async () => {
  const books = await Book.find({
    genres: { $not: { $in: ["Horror", "Science Fiction"] } },
  }).toArray();
  if (!books || books.length === 0)
    throw new Error("No books found with the given genre criteria", {
      cause: 404,
    });
  return books;
};

export const deleteBooksBeforeYear = async (year) => {
  const deleteResult = await Book.deleteMany({ year: { $lt: year } });
  if (deleteResult.deletedCount === 0)
    throw new Error("No books published before this year", { cause: 404 });
  return deleteResult;
};

export const booksAggregateOne = async () => {
  const books = await Book.aggregate([
    { $match: { year: { $gt: 2000 } } },
    { $sort: { year: -1 } },
  ]).toArray();
  return books;
};

export const booksAggregateTwo = async () => {
  const books = await Book.aggregate([{ $match: { year: { $gt: 2000 } } }])
    .project({ title: 1, author: 1, year: 1, _id: 0 })
    .toArray();
  return books;
};

export const booksAggregateThree = async () => {
  const books = await Book.aggregate([{ $unwind: "$genres" }])
    .project({ title: 1, genres: 1, _id: 0 })
    .toArray();
  return books;
};

export const booksAggregateFour = async () => {
  const books = await Book.aggregate([
    {
      $lookup: {
        from: "logs",
        localField: "title",
        foreignField: "bookTitle",
        as: "bookLogs",
        localField: "_id",
        foreignField: "book_id",
        as: "book_details",
      },
    },
  ]).toArray();
  return books;
};
