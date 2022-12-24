import { Service } from "@bluelibs/core";
import { ProjectCreateForm as BaseProjectCreateForm } from "./ProjectCreateForm.base";

@Service({ transient: true })
export class ProjectCreateForm extends BaseProjectCreateForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
