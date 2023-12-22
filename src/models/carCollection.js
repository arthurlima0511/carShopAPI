import { model, Schema } from "mongoose";

export const carSchema = new Schema({
  year: Number,
  make: String,
  model: String,
  body_styles: Array,
});

export const Car2020 = new model("Car2020", carSchema);

export const Car2021 = new model("Car2021", carSchema);
