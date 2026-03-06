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
  deleteBooksBeforeYear,
  booksAggregateOne,
  booksAggregateTwo,
  booksAggregateThree,
  booksAggregateFour,
} from "./book.service.js";

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

export async function deleteBooksBeforeYearController(req, res) {
  const { year } = req.query;
  try {
    const deletedBooks = await deleteBooksBeforeYear(parseInt(year));
    res.status(200).json({
      message: "Books deleted successfully",
      success: true,
      data: deletedBooks,
    });
  } catch (error) {
    res
      .status(error.cause || 500)
      .json({ message: error.message, success: false });
  }
}

export async function booksAggregateOneController(req, res) {
  try {
    const books = await booksAggregateOne();
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

export async function booksAggregateTwoController(req, res) {
  try {
    const books = await booksAggregateTwo();
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

export async function booksAggregateThreeController(req, res) {
  try {
    const books = await booksAggregateThree();
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

export async function booksAggregateFourController(req, res) {
  try {
    const books = await booksAggregateFour();
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
