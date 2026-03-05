import { Book } from "../../db/models/book.model.js";

//insert one document
export const InsertOneBook = async (book) => {
  const insert = await Book.insertOne(book);
  if (!insert) throw new Error("Error inserting the document", { cause: 500 });
  return insert;
};
