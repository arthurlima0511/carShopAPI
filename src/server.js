import app from "./app/app.js";
import { config } from "dotenv";

config();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
