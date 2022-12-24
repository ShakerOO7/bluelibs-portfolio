import { Service } from "@bluelibs/core";
import { EducationListFiltersForm as BaseEducationListFiltersForm } from "./EducationListFiltersForm.base";

@Service({ transient: true })
export class EducationListFiltersForm extends BaseEducationListFiltersForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
