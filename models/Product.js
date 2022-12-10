import { model, models, Schema } from "mongoose";

const ProductSchema = new Schema({
  title: String,
  images: Array,
  price: Object,
  category: String,
  subcategory: String,
  stock: Number,
  defaultSize: String,
  defaultColor: String,
  variants: Array,
});

const Product = models?.Product || model("product", ProductSchema);

export default Product;
