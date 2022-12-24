import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { AboutMe } from "@bundles/UIAppBundle/collections";
import { AboutMeViewer as BaseAboutMeViewer } from "./AboutMeViewer.base";

@Service({ transient: true })
export class AboutMeViewer extends BaseAboutMeViewer {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<AboutMe> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
