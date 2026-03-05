import { CreateBooksCollection, CreateIndex } from "./book.service.js";

// Q 1
export async function createCollection(req, res, next) {
  try {
    const create = await CreateBooksCollection();
    res
      .status(201)
      .json({ message: "Collection created successfully", success: true });
  } catch (error) {
    if (error.code == 48) {
      return res
        .status(409)
        .json({ message: "collection already exist", success: false });
    }
    res
      .status(error.cause || 500)
      .json({ message: error.message, success: false });
  }
}

export async function CreateIndexController(req, res, next) {
  try {
    const index = await CreateIndex();
    res
      .status(201)
      .json({ message: "Index created successfully", success: true });
  } catch (error) {
    res
      .status(error.cause || 500)
      .json({ message: error.message, success: false });
  }
}
