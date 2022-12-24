import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Image } from "@bundles/UIAppBundle/collections";
import { ImageViewer as BaseImageViewer } from "./ImageViewer.base";

@Service({ transient: true })
export class ImageViewer extends BaseImageViewer {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<Image> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
