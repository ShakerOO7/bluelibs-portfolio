import { Address } from '../shared-models/Address';
import { collection, field, shortcuts } from '../utils';

export const WorkExperience = collection({
  id: 'WorkExperience',
  representedBy: 'companyName',
  behaviors: {
    softdeletable: true,
  },
  mock: {
    count: 3,
  },
  fields: [
    shortcuts.field.softdeletable(),
    ...shortcuts.fields.timestampable(),
    field({
      id: 'companyName',
      type: field.types.STRING,
      isReducer: false,
    }),

    // e.g Software Engineer, Designer ...
    field({
      id: 'jobTitle',
      type: field.types.STRING,
      isReducer: false,
    }),

    // Start & end dates
    field({
      id: 'startDate',
      type: field.types.DATE,
      isReducer: false,
      isRequired: false,
    }),

    field({
      id: 'endDate',
      type: field.types.DATE,
      isReducer: false,
      isRequired: false,
    }),

    field.enum('workLocation', {
      enumValues: [
        {
          id: 'REMOTE',
          value: 'Remote',
        },
        {
          id: 'ON_SITE',
          value: 'On Site',
        },
        {
          id: 'HYBRID',
          value: 'Hybrid',
        },
      ],
    }),

    field.enum('jobType', {
      enumValues: [
        {
          id: 'FULL_TIME',
          value: 'Full Time',
        },
        {
          id: 'PART_TIME',
          value: 'Part Time',
        },
        {
          id: 'CONTRACT',
          value: 'Contract',
        },
        {
          id: 'INTERNSHIP',
          value: 'Internship',
        },
      ],
    }),

    field.object('address', {
      model: Address,
      isRequired: false,
    }),

    // This can be rich text description
    field({
      id: 'description',
      type: field.types.STRING,
      isReducer: false,
      isRequired: false,
    }),
  ],
  relations: [...shortcuts.relations.blameable()],
});
