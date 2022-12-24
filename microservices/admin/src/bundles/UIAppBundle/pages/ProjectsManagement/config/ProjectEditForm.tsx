import { Service } from "@bluelibs/core";
import { ProjectEditForm as BaseProjectEditForm } from "./ProjectEditForm.base";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Project } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class ProjectEditForm extends BaseProjectEditForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<Project> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
