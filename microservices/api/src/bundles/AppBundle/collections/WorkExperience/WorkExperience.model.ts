export * from "./WorkExperience.model.base";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { WorkExperience as BaseWorkExperience } from "./WorkExperience.model.base";
export { WorkExperienceJobType } from "./enums/WorkExperienceJobType.enum";
export { WorkExperienceWorkLocation } from "./enums/WorkExperienceWorkLocation.enum";

@Schema()
export class WorkExperience extends BaseWorkExperience {
  // You can extend the base here
}
