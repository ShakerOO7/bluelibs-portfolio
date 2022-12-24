import { Service } from "@bluelibs/core";
import { WorkExperienceCreateForm as BaseWorkExperienceCreateForm } from "./WorkExperienceCreateForm.base";

@Service({ transient: true })
export class WorkExperienceCreateForm extends BaseWorkExperienceCreateForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
