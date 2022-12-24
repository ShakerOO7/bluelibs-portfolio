import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Project } from "@bundles/UIAppBundle/collections";
import { ProjectViewer as BaseProjectViewer } from "./ProjectViewer.base";

@Service({ transient: true })
export class ProjectViewer extends BaseProjectViewer {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<Project> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
