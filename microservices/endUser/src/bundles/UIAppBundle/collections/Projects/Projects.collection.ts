import {
  Collection,
  CollectionLinkConfig,
  CollectionTransformMap,
} from "@bluelibs/x-ui";
import { ImagesCollection, UsersCollection } from "..";
import { Project } from '../../../../api.types';

export type { Project };

export class ProjectsCollection extends Collection<Project> {
  getName() {
    return "Projects";
  }

  getInputs() {
    return {
      insert: "ProjectInsertInput!",
      update: "ProjectUpdateInput!",
    };
  }

  // Return here the relations with other configs
  getLinks(): CollectionLinkConfig<Project>[] {
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
  getTransformMap(): CollectionTransformMap<Project> {
    return {
      createdAt: (v) => (v && new Date(v) ? new Date(v) : v),
      updatedAt: (v) => (v && new Date(v) ? new Date(v) : v),
    };
  }
}
