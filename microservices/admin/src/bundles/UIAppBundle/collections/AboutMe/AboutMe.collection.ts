import {
  Collection,
  CollectionLinkConfig,
  CollectionTransformMap,
} from "@bluelibs/x-ui";
import { AboutMe } from "@root/api.types";
import {
  UsersCollection,
  ImagesCollection,
} from "@bundles/UIAppBundle/collections";
import { ObjectId } from "@bluelibs/ejson";

export type { AboutMe };

export class AboutMeCollection extends Collection<AboutMe> {
  getName() {
    return "AboutMe";
  }

  getInputs() {
    return {
      insert: "AboutMeInsertInput!",
      update: "AboutMeUpdateInput!",
    };
  }

  // Return here the relations with other configs
  getLinks(): CollectionLinkConfig<AboutMe>[] {
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
      {
        collection: () => ImagesCollection,
        name: "image",
        field: "imageId",
      },
    ];
  }

  // Return here how you want to transform certain fields
  getTransformMap(): CollectionTransformMap<AboutMe> {
    return {
      createdAt: (v) => (v && new Date(v) ? new Date(v) : v),
      updatedAt: (v) => (v && new Date(v) ? new Date(v) : v),
    };
  }
}
