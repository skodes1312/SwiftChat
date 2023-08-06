import express from "express";
import dotenv from "dotenv";
import { chats } from "./data/data.js";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

//configuring dotenv file
dotenv.config();

//Database connection
connectDB();

const app = express();

//configuration for server to start accepting json data
app.use(express.json());

//setting cors middleware to allow cross-origin resource sharing
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Working Fine.");
});

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;

//starting server

app.listen(PORT, () => {
  console.log(`Server running at Port:${PORT}`);
});
