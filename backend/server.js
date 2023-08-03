import express from "express";
import dotenv from "dotenv";
import { chats } from "./data/data.js";
import cors from "cors";
import connectDB from "./config/db.js";

//configuring dotenv file

dotenv.config();
connectDB();
const app = express();

//setting cors middleware to allow cross-origin resource sharing

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Working Fine.");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

const PORT = process.env.PORT || 8000;

//starting server

app.listen(PORT, () => {
  console.log(`Server running at Port:${PORT}`);
});
