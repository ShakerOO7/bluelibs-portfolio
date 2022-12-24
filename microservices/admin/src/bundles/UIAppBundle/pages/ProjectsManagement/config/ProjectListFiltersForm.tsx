import { Service } from "@bluelibs/core";
import { ProjectListFiltersForm as BaseProjectListFiltersForm } from "./ProjectListFiltersForm.base";

@Service({ transient: true })
export class ProjectListFiltersForm extends BaseProjectListFiltersForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
