import { db } from "../../db/connect.js";
import { Log } from "../../db/models/log.model.js";

export const CreateLogsCollection = async () => {
  // capped collection
  const log = await db.createCollection("logs", {
    capped: true,
    size: 1024 * 1024,
  });
  if (!log) throw new Error("Error creating the collection", { cause: 500 });
  return log;
};
