import { Address } from '../shared-models/Address';
import { collection, field, shortcuts } from '../utils';

export const Education = collection({
  id: 'Education',
  representedBy: 'degreeTitle',
  behaviors: {
    softdeletable: true,
  },
  mock: {
    count: 1,
  },
  fields: [
    shortcuts.field.softdeletable(),
    ...shortcuts.fields.timestampable(),
    field({
      id: 'degreeTitle',
      type: field.types.STRING,
      isReducer: false,
    }),
    field({
      id: 'institute',
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
  ],
  relations: [...shortcuts.relations.blameable()],
});
