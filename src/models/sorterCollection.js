import { Schema, model } from "mongoose";
import { carSchema } from "./carCollection.js";

const mostViewdSchema = new Schema({
  car: carSchema,
  views: Number,
});

export const mostViewed = new model("MostViewed", mostViewdSchema);

const moreAddedToCartSchema = new Schema({
  car: carSchema,
  addedToCart: Number,
});

export const moreAddedToCart = new model(
  "MoreAddedToCart",
  moreAddedToCartSchema
);
