import express from "express";
import routes from "../routes/routes.js";
import cors from "cors";
import { connectDB } from "../db/conn.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

await connectDB();
app.use(routes);

export default app;
