import { Service } from "@bluelibs/core";
import { AboutMeListFiltersForm as BaseAboutMeListFiltersForm } from "./AboutMeListFiltersForm.base";

@Service({ transient: true })
export class AboutMeListFiltersForm extends BaseAboutMeListFiltersForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
