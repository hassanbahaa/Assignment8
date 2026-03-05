import { InsertOneBook } from "./book.service.js";

export async function InsertOneBookController(req, res) {
  try {
    const book = req.body;
    const insert = await InsertOneBook(book);
    res.status(201).json({
      message: "Book inserted successfully",
      success: true,
      data: { bookId: insert.insertedId },
    });
  } catch (error) {
    res
      .status(error.cause || 500)
      .json({ message: error.message, success: false });
  }
}
