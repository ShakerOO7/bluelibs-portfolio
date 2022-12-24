import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { ProjectUpdateInput as BaseProjectUpdateInput } from "./ProjectUpdate.input.base";

@Schema()
export class ProjectUpdateInput extends BaseProjectUpdateInput {
  // You can extend the base here
}
