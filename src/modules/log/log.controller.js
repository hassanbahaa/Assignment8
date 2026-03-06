import { InsertLog } from "./log.service.js";

export async function InsertLogController(req, res) {
  try {
    const log = req.body;
    const insert = await InsertLog(log);
    res.status(201).json({
      message: "Log inserted successfully",
      success: true,
      data: { logId: insert.insertedId },
    });
  } catch (error) {
    res
      .status(error.cause || 500)
      .json({ message: error.message, success: false });
  }
}
