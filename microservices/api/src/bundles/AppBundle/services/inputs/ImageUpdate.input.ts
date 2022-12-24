import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { ImageUpdateInput as BaseImageUpdateInput } from "./ImageUpdate.input.base";

@Schema()
export class ImageUpdateInput extends BaseImageUpdateInput {
  // You can extend the base here
}
