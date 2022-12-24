export * from "./Image.model.base";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { Image as BaseImage } from "./Image.model.base";

@Schema()
export class Image extends BaseImage {
  // You can extend the base here
}
