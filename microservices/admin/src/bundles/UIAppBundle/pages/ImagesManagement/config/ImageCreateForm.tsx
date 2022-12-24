import { Service } from "@bluelibs/core";
import { ImageCreateForm as BaseImageCreateForm } from "./ImageCreateForm.base";

@Service({ transient: true })
export class ImageCreateForm extends BaseImageCreateForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
