import {
  Collection,
  CollectionLinkConfig,
  CollectionTransformMap,
} from '@bluelibs/x-ui';
import { UsersCollection } from '..';
import { WorkExperience } from '../../../../api.types';

export type { WorkExperience };

export class WorkExperienceCollection extends Collection<WorkExperience> {
  getName() {
    return 'WorkExperience';
  }

  getInputs() {
    return {
      insert: 'WorkExperienceInsertInput!',
      update: 'WorkExperienceUpdateInput!',
    };
  }

  // Return here the relations with other configs
  getLinks(): CollectionLinkConfig<WorkExperience>[] {
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
    ];
  }

  // Return here how you want to transform certain fields
  getTransformMap(): CollectionTransformMap<WorkExperience> {
    return {
      createdAt: (v) => (v && new Date(v) ? new Date(v) : v),
      updatedAt: (v) => (v && new Date(v) ? new Date(v) : v),
      startDate: (v) => (v && new Date(v) ? new Date(v) : v),
      endDate: (v) => (v && new Date(v) ? new Date(v) : v),
    };
  }
}
