import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { TeckStack } from "@bundles/UIAppBundle/collections";
import { TeckStackList as BaseTeckStackList } from "./TeckStackList.base";

@Service({ transient: true })
export class TeckStackList extends BaseTeckStackList {
  build() {
    super.build();
    // Perform additional modifications such as updating how a list item renders or add additional ones
  }

  static getRequestBody(): QueryBodyType<TeckStack> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
