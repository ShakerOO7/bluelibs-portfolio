import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { EducationInsertInput as BaseEducationInsertInput } from "./EducationInsert.input.base";

@Schema()
export class EducationInsertInput extends BaseEducationInsertInput {
  // You can extend the base here
}
