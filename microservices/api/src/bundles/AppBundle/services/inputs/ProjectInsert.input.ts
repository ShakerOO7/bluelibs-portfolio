import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { ProjectInsertInput as BaseProjectInsertInput } from "./ProjectInsert.input.base";

@Schema()
export class ProjectInsertInput extends BaseProjectInsertInput {
  // You can extend the base here
}
