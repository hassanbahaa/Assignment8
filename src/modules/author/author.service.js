import { db } from "../../db/connect.js";
import { Author } from "../../db/models/author.model.js";
export const implicitCollection = async (author) => {
  const newAuthor = await Author.insertOne(author);
  if (!newAuthor)
    throw new Error("Error creating the collection", { cause: 500 });
  return newAuthor;
};
