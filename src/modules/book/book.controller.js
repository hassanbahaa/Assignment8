import {
  InsertManyBooks,
  InsertOneBook,
  UpdateBookByTitle,
  getBookByTitle,
  getBooksByYear,
  getBooksByGenre,
  getBooksWithPagination,
  findBookswithInt,
  findBooksNotInGenres,
} from "./book.service.js";
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
      return res.status(400).json({
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

//Q-8
export async function UpdateBookController(req, res) {
  const title = req.params.title;
  const update = req.body;
  try {
    const updateBook = await UpdateBookByTitle(title, update);
    if (updateBook.matchedCount === 0) {
      return res.status(404).json({
        message: "Book not found",
        success: false,
      });
    }
    res.status(200).json({
      message: "Book updated successfully",
      success: true,
      data: updateBook,
    });
  } catch (error) {
    res
      .status(error.cause || 500)
      .json({ message: error.message, success: false });
  }
}

// Q-9
export async function getBookController(req, res) {
  const { title } = req.query;
  try {
    const book = await getBookByTitle(title);
    res.status(200).json({
      message: "Book found successfully",
      success: true,
      data: book,
    });
  } catch (error) {
    res
      .status(error.cause || 500)
      .json({ message: error.message, success: false });
  }
}

export async function getBooksByYearController(req, res) {
  const from = parseInt(req.query.from);
  const to = parseInt(req.query.to);
  try {
    const books = await getBooksByYear(from, to);
    res.status(200).json({
      message: "Books found successfully",
      success: true,
      data: books,
    });
  } catch (error) {
    res
      .status(error.cause || 500)
      .json({ message: error.message, success: false });
  }
}

// Q11
export async function getBooksByGenreController(req, res) {
  const { genre } = req.query;
  try {
    const books = await getBooksByGenre(genre);
    res.status(200).json({
      message: "Books found successfully",
      success: true,
      data: books,
    });
  } catch (error) {
    res
      .status(error.cause || 500)
      .json({ message: error.message, success: false });
  }
}

// Q12 Skip the first two books, limit the results to the next three, sorted by year in descending order
export async function skipLimitController(req, res) {
  try {
    const books = await getBooksWithPagination();
    res.status(200).json({
      message: "Books found successfully",
      success: true,
      data: books,
    });
  } catch (error) {
    res
      .status(error.cause || 500)
      .json({ message: error.message, success: false });
  }
}

//Q13 Find books where the year field stored as an integer
export async function findBookswithIntController(req, res) {
  try {
    const books = await findBookswithInt();
    res.status(200).json({
      message: "Books found successfully",
      success: true,
      data: books,
    });
  } catch (error) {
    res
      .status(error.cause || 500)
      .json({ message: error.message, success: false });
  }
}

// Q14 Find all books where the genres field does not include any of the genres "Horror" or "Science Fiction"
export async function findBooksNotInGenresController(req, res) {
  try {
    const books = await findBooksNotInGenres();
    res.status(200).json({
      message: "Books found successfully",
      success: true,
      data: books,
    });
  } catch (error) {
    res
      .status(error.cause || 500)
      .json({ message: error.message, success: false });
  }
}
