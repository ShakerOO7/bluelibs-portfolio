export * from "./Education.model.base";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { Education as BaseEducation } from "./Education.model.base";

@Schema()
export class Education extends BaseEducation {
  // You can extend the base here
}
