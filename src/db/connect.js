// create mongoClient
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.DB_HOST);
const db = client.db("assignment8");
function connectDB() {
  client
    .connect()
    .then(() => {
      console.log("DB connected successfully :)");
    })
    .catch((err) => {
      console.log("error connect to db,", err);
    });
}

export { connectDB, db, client };
