import { Service } from "@bluelibs/core";
import { TeckStackCreateForm as BaseTeckStackCreateForm } from "./TeckStackCreateForm.base";

@Service({ transient: true })
export class TeckStackCreateForm extends BaseTeckStackCreateForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
