import mongoose, { mongo } from "mongoose";

const URI = process.env.mDB;

mongoose.connect(`${URI}`, {}, (err) => {
  if (err) throw err;
  console.log("MongoDB is connected");
});
