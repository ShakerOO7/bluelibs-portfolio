import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";
import {
  WorkExperienceInsertInput,
  WorkExperienceUpdateInput,
} from "../../../services/inputs";
import { WorkExperienceCollection } from "../../../collections/WorkExperience/WorkExperience.collection";

true;
export default {
  Query: [
    [],
    {
      WorkExperienceFindOne: [X.ToNovaOne(WorkExperienceCollection)],
      WorkExperienceFind: [X.ToNova(WorkExperienceCollection)],
      WorkExperienceCount: [X.ToCollectionCount(WorkExperienceCollection)],
    },
  ],
  Mutation: [
    [],
    {
      WorkExperienceInsertOne: [
        X.ToModel(WorkExperienceInsertInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.ToDocumentInsert(WorkExperienceCollection),
        X.ToNovaByResultID(WorkExperienceCollection),
      ],
      WorkExperienceUpdateOne: [
        X.ToModel(WorkExperienceUpdateInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.CheckDocumentExists(WorkExperienceCollection),
        X.ToDocumentUpdateByID(
          WorkExperienceCollection,
          null,
          ({ document }) => ({
            $set: document,
          })
        ),
        X.ToNovaByResultID(WorkExperienceCollection),
      ],
      WorkExperienceDeleteOne: [
        X.CheckDocumentExists(WorkExperienceCollection),
        X.ToDocumentDeleteByID(WorkExperienceCollection),
      ],
    },
  ],
  Subscription: {
    WorkExperienceSubscription: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscription(WorkExperienceCollection)],
    },
    WorkExperienceSubscriptionCount: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscriptionCount(WorkExperienceCollection)],
    },
  },
} as IResolverMap;
