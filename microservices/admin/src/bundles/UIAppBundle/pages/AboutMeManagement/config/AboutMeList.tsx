import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { AboutMe } from "@bundles/UIAppBundle/collections";
import { AboutMeList as BaseAboutMeList } from "./AboutMeList.base";

@Service({ transient: true })
export class AboutMeList extends BaseAboutMeList {
  build() {
    super.build();
    // Perform additional modifications such as updating how a list item renders or add additional ones
  }

  static getRequestBody(): QueryBodyType<AboutMe> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
