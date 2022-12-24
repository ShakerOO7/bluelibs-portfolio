import { Service } from "@bluelibs/core";
import { WorkExperienceEditForm as BaseWorkExperienceEditForm } from "./WorkExperienceEditForm.base";
import { QueryBodyType } from "@bluelibs/x-ui";
import { WorkExperience } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class WorkExperienceEditForm extends BaseWorkExperienceEditForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<WorkExperience> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
