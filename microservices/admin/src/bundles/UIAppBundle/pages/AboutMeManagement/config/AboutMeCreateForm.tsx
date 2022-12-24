import { Service } from "@bluelibs/core";
import { AboutMeCreateForm as BaseAboutMeCreateForm } from "./AboutMeCreateForm.base";

@Service({ transient: true })
export class AboutMeCreateForm extends BaseAboutMeCreateForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
