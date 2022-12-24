import { Collection, Behaviors } from "@bluelibs/mongo-bundle";
import { Behaviors as XBehaviors } from "@bluelibs/x-bundle";
import * as links from "./WorkExperience.links";
import * as reducers from "./WorkExperience.reducers";
import { WorkExperience } from "./WorkExperience.model";

export class WorkExperienceCollection extends Collection<WorkExperience> {
  static collectionName = "workExperience";
  static model = WorkExperience;

  static links = links;
  static reducers = reducers;

  static behaviors = [
    Behaviors.Timestampable(),

    Behaviors.Blameable(),

    Behaviors.Softdeletable(),

    XBehaviors.Live(),
  ];

  // Create an array of indexes
  static indexes = [
    { key: { isDeleted: 1 } },
    { key: { createdAt: 1 } },
    { key: { createdBy: 1 } },
  ];
}
