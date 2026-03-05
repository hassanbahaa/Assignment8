import { db } from "../../db/connect.js";
import { Book } from "../../db/models/book.model.js";

export const CreateBooksCollection = async () => {
  const book = await db.createCollection("books", {
    validator: {
      $jsonSchema: {
        required: ["title"],
        properties: {
          title: {
            bsonType: "string",
            description: "must be a string and is required",
            minLength: 3,
          },
        },
      },
    },
  });
  if (!book) throw new Error("Error creating the collection", { cause: 500 });
  return book;
};

// createIndex tor title
export const CreateIndex = async () => {
  const index = await Book.createIndex({ title: 1 });
  if (!index) throw new Error("Error creating the index", { cause: 500 });
  return index;
};
