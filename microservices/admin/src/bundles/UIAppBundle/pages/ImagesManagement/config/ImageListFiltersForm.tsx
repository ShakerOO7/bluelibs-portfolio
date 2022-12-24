import { Service } from "@bluelibs/core";
import { ImageListFiltersForm as BaseImageListFiltersForm } from "./ImageListFiltersForm.base";

@Service({ transient: true })
export class ImageListFiltersForm extends BaseImageListFiltersForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
