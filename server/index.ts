import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import charRouter from "./routes/charRouter";

const app = express();
dotenv.config({ path: __dirname + "/.env" });

app.use(express.json());
app.use(cors());

//Routes
app.use("/character", charRouter);

//Database
import "./config/database";

app.post("/");

app.put("/updateChar");

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
