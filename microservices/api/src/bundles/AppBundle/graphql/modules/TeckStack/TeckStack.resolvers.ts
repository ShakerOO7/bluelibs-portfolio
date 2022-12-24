import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";
import {
  TeckStackInsertInput,
  TeckStackUpdateInput,
} from "../../../services/inputs";
import { TeckStackCollection } from "../../../collections/TeckStack/TeckStack.collection";

true;
export default {
  Query: [
    [],
    {
      TeckStackFindOne: [X.ToNovaOne(TeckStackCollection)],
      TeckStackFind: [X.ToNova(TeckStackCollection)],
      TeckStackCount: [X.ToCollectionCount(TeckStackCollection)],
    },
  ],
  Mutation: [
    [],
    {
      TeckStackInsertOne: [
        X.ToModel(TeckStackInsertInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.ToDocumentInsert(TeckStackCollection),
        X.ToNovaByResultID(TeckStackCollection),
      ],
      TeckStackUpdateOne: [
        X.ToModel(TeckStackUpdateInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.CheckDocumentExists(TeckStackCollection),
        X.ToDocumentUpdateByID(TeckStackCollection, null, ({ document }) => ({
          $set: document,
        })),
        X.ToNovaByResultID(TeckStackCollection),
      ],
      TeckStackDeleteOne: [
        X.CheckDocumentExists(TeckStackCollection),
        X.ToDocumentDeleteByID(TeckStackCollection),
      ],
    },
  ],
  Subscription: {
    TeckStackSubscription: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscription(TeckStackCollection)],
    },
    TeckStackSubscriptionCount: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscriptionCount(TeckStackCollection)],
    },
  },
} as IResolverMap;
