import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import AppRouter from "./routes/AppRouter.js";
import connection from './db/connection.js'
import logger from 'morgan'
import helmet from 'helmet'


const app = express();
const PORT = process.env.PORT || 1010;

dotenv.config();
app.use(logger("dev"));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.disable("X-Powered-By");
app.get("/", (req, res) => res.send({ msg: "Server Working" }));
app.use("/api", AppRouter);

// const CONNECTION_URL = process.env.JEWELZ_CUTS_DB;

// mongoose
//   .connect(CONNECTION_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() =>
//     app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
//   )
//   .catch((error) => console.log(error.message));

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Database Connected");
    console.log(`App listening on port: ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});