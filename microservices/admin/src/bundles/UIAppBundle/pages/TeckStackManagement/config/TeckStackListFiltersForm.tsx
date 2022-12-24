import { Service } from "@bluelibs/core";
import { TeckStackListFiltersForm as BaseTeckStackListFiltersForm } from "./TeckStackListFiltersForm.base";

@Service({ transient: true })
export class TeckStackListFiltersForm extends BaseTeckStackListFiltersForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
