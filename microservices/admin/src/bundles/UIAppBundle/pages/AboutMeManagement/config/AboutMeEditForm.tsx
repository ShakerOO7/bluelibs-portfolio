import { Service } from "@bluelibs/core";
import { AboutMeEditForm as BaseAboutMeEditForm } from "./AboutMeEditForm.base";
import { QueryBodyType } from "@bluelibs/x-ui";
import { AboutMe } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class AboutMeEditForm extends BaseAboutMeEditForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<AboutMe> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
