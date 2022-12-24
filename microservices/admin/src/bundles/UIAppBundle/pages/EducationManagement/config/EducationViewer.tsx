import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Education } from "@bundles/UIAppBundle/collections";
import { EducationViewer as BaseEducationViewer } from "./EducationViewer.base";

@Service({ transient: true })
export class EducationViewer extends BaseEducationViewer {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<Education> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
