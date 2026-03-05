import {
  CreateBooksCollection,
  CreateIndex,
  implicitCollection,
  CreateLogsCollection,
} from "./collection.service.js";
// Q 1
export async function createCollection(req, res) {
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

export async function CreateIndexController(req, res) {
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
export async function implicitCollectionController(req, res, next) {
  try {
    const author = await implicitCollection(req.body);
    if (!author) throw new Error("Error insert author", { cause: 500 });
    res
      .status(201)
      .json({ message: "Author created succussfully", success: true });
  } catch (error) {
    res
      .status(error.cause || 500)
      .json({ message: error.message, success: false });
  }
}

export async function createLogsColController(req, res, next) {
  try {
    const create = await CreateLogsCollection();
    res.status(201).json({
      success: true,
      message: { ok: 1 },
    });
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
