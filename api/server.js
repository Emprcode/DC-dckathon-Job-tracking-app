<<<<<<< HEAD
import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { connectDb } from "./src/dbConfig/connectDb.js";
import UserRouter from "./src/routers/UserRouter.js";
import JobRouter from "./src/routers/JobRouter.js";
import ProfileRouter from "./src/routers/ProfileRouter.js";
dotenv.config();
=======
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDb } from './src/dbConfig/connectDb.js'
import UserRouter from './src/routers/UserRouter.js'
import JobRouter from './src/routers/JobRouter.js'
import CommentRouter from './src/routers/CommentRouter.js'
dotenv.config()
>>>>>>> 4cd624a1779e6b3583cf2fa6b961f5653ed57e89

const app = express();
const PORT = process.env.PORT || 8000;

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//database

connectDb();

//routers

<<<<<<< HEAD
app.use("/api/v1/user", UserRouter);
app.use("/api/v1/job", JobRouter);
app.use("/api/v1/profile", ProfileRouter);
=======
app.use("/api/v1/user", UserRouter)
app.use("/api/v1/job", JobRouter)
app.use("/api/v1/comment", CommentRouter)
>>>>>>> 4cd624a1779e6b3583cf2fa6b961f5653ed57e89

//global error handler

app.use((error, req, res, next) => {
  console.log(error);
  const statusCode = error.errorCode || 404;

  res.status(statusCode).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server running at http://localhost:${PORT}`);
});
