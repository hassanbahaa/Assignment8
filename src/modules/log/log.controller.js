import { CreateLogsCollection } from "./log.service.js";

export async function createCollection(req, res, next) {
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
