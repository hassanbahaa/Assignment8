import { db } from "../../db/connect.js";
import { Log } from "../../db/models/log.model.js";
// insert log - q7
export const InsertLog = async (log) => {
  const insert = await Log.insertOne(log);
  if (!insert) throw new Error("Error inserting the log", { cause: 500 });
  return insert;
};
