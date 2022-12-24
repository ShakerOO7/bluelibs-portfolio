import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";
import {
  ProjectInsertInput,
  ProjectUpdateInput,
} from "../../../services/inputs";
import { ProjectsCollection } from "../../../collections/Projects/Projects.collection";

true;
export default {
  Query: [
    [],
    {
      ProjectsFindOne: [X.ToNovaOne(ProjectsCollection)],
      ProjectsFind: [X.ToNova(ProjectsCollection)],
      ProjectsCount: [X.ToCollectionCount(ProjectsCollection)],
    },
  ],
  Mutation: [
    [],
    {
      ProjectsInsertOne: [
        X.ToModel(ProjectInsertInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.ToDocumentInsert(ProjectsCollection),
        X.ToNovaByResultID(ProjectsCollection),
      ],
      ProjectsUpdateOne: [
        X.ToModel(ProjectUpdateInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.CheckDocumentExists(ProjectsCollection),
        X.ToDocumentUpdateByID(ProjectsCollection, null, ({ document }) => ({
          $set: document,
        })),
        X.ToNovaByResultID(ProjectsCollection),
      ],
      ProjectsDeleteOne: [
        X.CheckDocumentExists(ProjectsCollection),
        X.ToDocumentDeleteByID(ProjectsCollection),
      ],
    },
  ],
  Subscription: {
    ProjectsSubscription: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscription(ProjectsCollection)],
    },
    ProjectsSubscriptionCount: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscriptionCount(ProjectsCollection)],
    },
  },
} as IResolverMap;
