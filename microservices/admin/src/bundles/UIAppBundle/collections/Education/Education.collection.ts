import {
  Collection,
  CollectionLinkConfig,
  CollectionTransformMap,
} from "@bluelibs/x-ui";
import { Education } from "@root/api.types";
import { UsersCollection } from "@bundles/UIAppBundle/collections";
import { ObjectId } from "@bluelibs/ejson";

export type { Education };

export class EducationCollection extends Collection<Education> {
  getName() {
    return "Education";
  }

  getInputs() {
    return {
      insert: "EducationInsertInput!",
      update: "EducationUpdateInput!",
    };
  }

  // Return here the relations with other configs
  getLinks(): CollectionLinkConfig<Education>[] {
    return [
      {
        collection: () => UsersCollection,
        name: "createdBy",
        field: "createdById",
      },
      {
        collection: () => UsersCollection,
        name: "updatedBy",
        field: "updatedById",
      },
    ];
  }

  // Return here how you want to transform certain fields
  getTransformMap(): CollectionTransformMap<Education> {
    return {
      createdAt: (v) => (v && new Date(v) ? new Date(v) : v),
      updatedAt: (v) => (v && new Date(v) ? new Date(v) : v),
      startDate: (v) => (v && new Date(v) ? new Date(v) : v),
      endDate: (v) => (v && new Date(v) ? new Date(v) : v),
    };
  }
}
