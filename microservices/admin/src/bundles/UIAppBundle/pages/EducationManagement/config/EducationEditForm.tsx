import { Service } from "@bluelibs/core";
import { EducationEditForm as BaseEducationEditForm } from "./EducationEditForm.base";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Education } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class EducationEditForm extends BaseEducationEditForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<Education> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
