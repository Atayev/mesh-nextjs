import { model, models, Schema } from "mongoose";

const SliderSchema = new Schema({
  title: String,
  imageUrl: Array,
});
const Slider = models?.Slider  || model("Slider", SliderSchema);

export default Slider;