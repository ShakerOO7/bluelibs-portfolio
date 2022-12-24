import { Service } from "@bluelibs/core";
import { TeckStackEditForm as BaseTeckStackEditForm } from "./TeckStackEditForm.base";
import { QueryBodyType } from "@bluelibs/x-ui";
import { TeckStack } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class TeckStackEditForm extends BaseTeckStackEditForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<TeckStack> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
