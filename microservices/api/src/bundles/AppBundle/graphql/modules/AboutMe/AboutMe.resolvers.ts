import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";
import {
  AboutMeInsertInput,
  AboutMeUpdateInput,
} from "../../../services/inputs";
import { AboutMeCollection } from "../../../collections/AboutMe/AboutMe.collection";

true;
export default {
  Query: [
    [],
    {
      AboutMeFindOne: [X.ToNovaOne(AboutMeCollection)],
      AboutMeFind: [X.ToNova(AboutMeCollection)],
      AboutMeCount: [X.ToCollectionCount(AboutMeCollection)],
    },
  ],
  Mutation: [
    [],
    {
      AboutMeInsertOne: [
        X.ToModel(AboutMeInsertInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.ToDocumentInsert(AboutMeCollection),
        X.ToNovaByResultID(AboutMeCollection),
      ],
      AboutMeUpdateOne: [
        X.ToModel(AboutMeUpdateInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.CheckDocumentExists(AboutMeCollection),
        X.ToDocumentUpdateByID(AboutMeCollection, null, ({ document }) => ({
          $set: document,
        })),
        X.ToNovaByResultID(AboutMeCollection),
      ],
      AboutMeDeleteOne: [
        X.CheckDocumentExists(AboutMeCollection),
        X.ToDocumentDeleteByID(AboutMeCollection),
      ],
    },
  ],
  Subscription: {
    AboutMeSubscription: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscription(AboutMeCollection)],
    },
    AboutMeSubscriptionCount: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscriptionCount(AboutMeCollection)],
    },
  },
} as IResolverMap;
