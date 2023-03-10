import {
  Collection,
  CollectionLinkConfig,
  CollectionTransformMap,
  IQueryInput,
  QueryBodyType,
} from '@bluelibs/x-ui';
import { ImagesCollection, UsersCollection } from '..';
import { TeckStack } from '../../../../api.types';

export type { TeckStack };

export class TeckStackCollection extends Collection<TeckStack> {
  getName() {
    return 'TeckStack';
  }

  getInputs() {
    return {
      insert: 'TeckStackInsertInput!',
      update: 'TeckStackUpdateInput!',
    };
  }

  // Return here the relations with other configs
  getLinks(): CollectionLinkConfig<TeckStack>[] {
    return [
      {
        collection: () => UsersCollection,
        name: 'createdBy',
        field: 'createdById',
      },
      {
        collection: () => UsersCollection,
        name: 'updatedBy',
        field: 'updatedById',
      },
      {
        collection: () => ImagesCollection,
        name: 'image',
        field: 'imageId',
      },
    ];
  }

  // Return here how you want to transform certain fields
  getTransformMap(): CollectionTransformMap<TeckStack> {
    return {
      createdAt: (v) => (v && new Date(v) ? new Date(v) : v),
      updatedAt: (v) => (v && new Date(v) ? new Date(v) : v),
    };
  }

  async find(query: IQueryInput, body?: QueryBodyType<TeckStack>) {
    return await super.find(query, {
      _id: 1,
      name: 1,
      order: 1,
      image: { downloadUrl: 1 },
      ...body,
    });
  }
}
