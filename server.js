import Express from "express";
import { config } from "dotenv";

const app = Express();
config();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
