import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";
import {
  EducationInsertInput,
  EducationUpdateInput,
} from "../../../services/inputs";
import { EducationCollection } from "../../../collections/Education/Education.collection";

true;
export default {
  Query: [
    [],
    {
      EducationFindOne: [X.ToNovaOne(EducationCollection)],
      EducationFind: [X.ToNova(EducationCollection)],
      EducationCount: [X.ToCollectionCount(EducationCollection)],
    },
  ],
  Mutation: [
    [],
    {
      EducationInsertOne: [
        X.ToModel(EducationInsertInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.ToDocumentInsert(EducationCollection),
        X.ToNovaByResultID(EducationCollection),
      ],
      EducationUpdateOne: [
        X.ToModel(EducationUpdateInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.CheckDocumentExists(EducationCollection),
        X.ToDocumentUpdateByID(EducationCollection, null, ({ document }) => ({
          $set: document,
        })),
        X.ToNovaByResultID(EducationCollection),
      ],
      EducationDeleteOne: [
        X.CheckDocumentExists(EducationCollection),
        X.ToDocumentDeleteByID(EducationCollection),
      ],
    },
  ],
  Subscription: {
    EducationSubscription: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscription(EducationCollection)],
    },
    EducationSubscriptionCount: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscriptionCount(EducationCollection)],
    },
  },
} as IResolverMap;
