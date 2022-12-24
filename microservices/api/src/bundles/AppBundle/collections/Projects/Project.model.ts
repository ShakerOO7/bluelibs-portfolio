export * from "./Project.model.base";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { Project as BaseProject } from "./Project.model.base";

@Schema()
export class Project extends BaseProject {
  // You can extend the base here
}
