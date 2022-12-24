import { Service } from "@bluelibs/core";
import { ImageEditForm as BaseImageEditForm } from "./ImageEditForm.base";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Image } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class ImageEditForm extends BaseImageEditForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<Image> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
