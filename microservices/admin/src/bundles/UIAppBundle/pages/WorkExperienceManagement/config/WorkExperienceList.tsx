import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { WorkExperience } from "@bundles/UIAppBundle/collections";
import { WorkExperienceList as BaseWorkExperienceList } from "./WorkExperienceList.base";

@Service({ transient: true })
export class WorkExperienceList extends BaseWorkExperienceList {
  build() {
    super.build();
    // Perform additional modifications such as updating how a list item renders or add additional ones
  }

  static getRequestBody(): QueryBodyType<WorkExperience> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
