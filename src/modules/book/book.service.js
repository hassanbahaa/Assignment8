import { Book } from "../../db/models/book.model.js";

//insert one document
export const InsertOneBook = async (book) => {
  const insert = await Book.insertOne(book);

  if (!insert) throw new Error("Error inserting the document", { cause: 500 });
  return insert;
};

// insert many books at least 3
export const InsertManyBooks = async (books) => {
  const insert = await Book.insertMany(books);
  if (!insert) throw new Error("Error inserting the documents", { cause: 500 });
  return insert;
};

// Q-8 update book with title
export const UpdateBookByTitle = async (title, update) => {
  const updateResult = await Book.updateOne({ title }, { $set: update });
  if (!updateResult)
    throw new Error("Error updating the document", { cause: 500 });
  return updateResult;
};

// Q9 find book with title
export const getBookByTitle = async (title) => {
  const book = await Book.findOne({ title });
  if (!book) throw new Error("Book not found", { cause: 404 });
  return book;
};

//  Q10 get books by year range
export const getBooksByYear = async (from, to) => {
  const books = await Book.find({ year: { $gte: from, $lte: to } }).toArray();
  if (!books || books.length === 0)
    throw new Error("No books found in the given year range", { cause: 404 });
  return books;
};

// Q11 get books by genre
export const getBooksByGenre = async (genres) => {
  const books = await Book.find({ genres }).toArray();
  if (!books || books.length === 0)
    throw new Error("No books found in the given genre", { cause: 404 });
  return books;
};

// Q12 Skip the first two books, limit the results to the next three, sorted by year in descending order
export const getBooksWithPagination = async () => {
  const books = await Book.find().skip(2).limit(3).sort({ year: -1 }).toArray();
  if (!books || books.length === 0)
    throw new Error("No books found with the given pagination", { cause: 404 });
  return books;
};

//Q13 Find books where the year field stored as an integer
export const findBookswithInt = async () => {
  const books = await Book.find({ year: { $type: "int" } }).toArray();
  if (!books || books.length === 0)
    throw new Error("No books found with year as integer", { cause: 404 });
  return books;
};

// Q14 Find all books where the genres field does not include any of the genres "Horror" or "Science Fiction"
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

// Q15 Delete all books published before 2000. (0.5 Grade) • DELETE: GET /books/before-year?year=2000
export const deleteBooksBeforeYear = async (year) => {
  const deleteResult = await Book.deleteMany({ year: { $lt: year } });
  if (deleteResult.deletedCount === 0)
    throw new Error("No books published before this year", { cause: 404 });
  return deleteResult;
};
