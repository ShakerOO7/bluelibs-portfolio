import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Project } from "@bundles/UIAppBundle/collections";
import { ProjectList as BaseProjectList } from "./ProjectList.base";

@Service({ transient: true })
export class ProjectList extends BaseProjectList {
  build() {
    super.build();
    // Perform additional modifications such as updating how a list item renders or add additional ones
  }

  static getRequestBody(): QueryBodyType<Project> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
