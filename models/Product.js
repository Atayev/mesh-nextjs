import { model, models, Schema } from "mongoose";

const ProductSchema = new Schema({
  title: String,
  images: Array,
  price: Object,
    category: String,
  subcategory:String,
  stock: Number,
  color: Array,
  size: Array,
});

const Product = models?.Product || model("Product", ProductSchema);

export default Product;