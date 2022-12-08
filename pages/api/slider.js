import Slider from "../../models/Slider";
import { initMongoose } from "../../utils/dbConnect";

export async function getSliderData() {
  return Slider.find().exec();
}

export default async function handle(req, res) {
  await initMongoose();
  res.json(await getSliderData());
}
