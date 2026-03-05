import { InsertManyBooks, InsertOneBook } from "./book.service.js";
//q 5
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
    if (error.code == 121) {
      return res
        .status(400)
        .json({ message: "title is required", success: false });
    }
    res
      .status(error.cause || 500)
      .json({ message: error.message, success: false });
  }
}

export async function InsertManyBooksController(req, res) {
  try {
    const books = req.body;
    if (!Array.isArray(books) || books.length < 3) {
      return res
        .status(400)
        .json({
          message: "Please provide an array of at least 3 books",
          success: false,
        });
    }
    const insert = await InsertManyBooks(books);
    res.status(201).json({
      message: "Books inserted successfully",
      success: true,
      data: { bookIds: insert.insertedIds },
    });
  } catch (error) {
    if (error.code == 121) {
      return res
        .status(400)
        .json({ message: "title is required for all books", success: false });
    }
  }
}
