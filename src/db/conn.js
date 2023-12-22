import mongoose from "mongoose";
import { config } from "dotenv";
config();

export async function connectDB() {
  try {
    mongoose.connect(process.env.MONGODB);
    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.log(error);
  }
}

export async function disconnectDB() {
  try {
    mongoose.disconnect();
    console.log("Desconectado do MongoDB");
  } catch (error) {
    console.log(error);
  }
}
