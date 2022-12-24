import { Service } from "@bluelibs/core";
import { WorkExperienceListFiltersForm as BaseWorkExperienceListFiltersForm } from "./WorkExperienceListFiltersForm.base";

@Service({ transient: true })
export class WorkExperienceListFiltersForm extends BaseWorkExperienceListFiltersForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
