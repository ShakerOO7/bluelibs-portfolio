import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { WorkExperience } from "@bundles/UIAppBundle/collections";
import { WorkExperienceViewer as BaseWorkExperienceViewer } from "./WorkExperienceViewer.base";

@Service({ transient: true })
export class WorkExperienceViewer extends BaseWorkExperienceViewer {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<WorkExperience> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
