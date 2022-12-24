import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { TeckStack } from "@bundles/UIAppBundle/collections";
import { TeckStackViewer as BaseTeckStackViewer } from "./TeckStackViewer.base";

@Service({ transient: true })
export class TeckStackViewer extends BaseTeckStackViewer {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<TeckStack> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
