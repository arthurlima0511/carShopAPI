import { model, Schema } from "mongoose";

export const carSchema = new Schema({
  year: {
    type: Number,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  body_styles: {
    type: Array,
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  addedToCart: {
    type: Number,
    default: 0,
  },
});

export const Car2020 = new model("Car2020", carSchema);

export const Car2021 = new model("Car2021", carSchema);
