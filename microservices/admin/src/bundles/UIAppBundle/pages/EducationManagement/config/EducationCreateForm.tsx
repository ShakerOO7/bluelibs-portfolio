import { Service } from "@bluelibs/core";
import { EducationCreateForm as BaseEducationCreateForm } from "./EducationCreateForm.base";

@Service({ transient: true })
export class EducationCreateForm extends BaseEducationCreateForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
