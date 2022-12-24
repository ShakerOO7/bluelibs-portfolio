import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";
import { ImageInsertInput, ImageUpdateInput } from "../../../services/inputs";
import { ImagesCollection } from "../../../collections/Images/Images.collection";

true;
export default {
  Query: [
    [],
    {
      ImagesFindOne: [X.ToNovaOne(ImagesCollection)],
      ImagesFind: [X.ToNova(ImagesCollection)],
      ImagesCount: [X.ToCollectionCount(ImagesCollection)],
    },
  ],
  Mutation: [
    [],
    {
      ImagesInsertOne: [
        X.ToModel(ImageInsertInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.ToDocumentInsert(ImagesCollection),
        X.ToNovaByResultID(ImagesCollection),
      ],
      ImagesUpdateOne: [
        X.ToModel(ImageUpdateInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.CheckDocumentExists(ImagesCollection),
        X.ToDocumentUpdateByID(ImagesCollection, null, ({ document }) => ({
          $set: document,
        })),
        X.ToNovaByResultID(ImagesCollection),
      ],
      ImagesDeleteOne: [
        X.CheckDocumentExists(ImagesCollection),
        X.ToDocumentDeleteByID(ImagesCollection),
      ],
    },
  ],
  Subscription: {
    ImagesSubscription: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscription(ImagesCollection)],
    },
    ImagesSubscriptionCount: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscriptionCount(ImagesCollection)],
    },
  },
} as IResolverMap;
