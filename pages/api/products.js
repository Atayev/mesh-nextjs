import Product from "../../models/Product";
import { initMongoose } from "../../utils/dbConnect";

export async function getAllProducts() {
  return Product.find().exec();
}

export default async function handle(req, res) {
  await initMongoose();
  res.json(await getAllProducts());
}
