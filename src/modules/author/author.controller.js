import { implicitCollection } from "../author/author.service.js";
export async function InsertAuthor(req, res, next) {
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
