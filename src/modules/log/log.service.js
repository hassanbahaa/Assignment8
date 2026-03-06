import { ObjectId } from "mongodb";
import { Log } from "../../db/models/log.model.js";
// insert log - q7
export const InsertLog = async (log) => {
  const Id = new ObjectId(log.book_id);
  const insert = await Log.insertOne({
    ...log,
    book_id: Id,
  });
  if (!insert) throw new Error("Error inserting the log", { cause: 500 });
  return insert;
};
