import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { ImageInsertInput as BaseImageInsertInput } from "./ImageInsert.input.base";

@Schema()
export class ImageInsertInput extends BaseImageInsertInput {
  // You can extend the base here
}
