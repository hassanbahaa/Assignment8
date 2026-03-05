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
