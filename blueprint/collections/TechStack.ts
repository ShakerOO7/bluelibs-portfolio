import { collection, field, relation, shortcuts } from '../utils';

export const TeckStack = collection({
  id: 'TeckStack',
  behaviors: {},
  mock: {
    count: 10,
  },
  fields: [
    ...shortcuts.fields.timestampable(),
    field({
      id: 'name',
      type: field.types.STRING,
      isReducer: false,
      isRequired: false,
    }),
    field.integer('order', { isRequired: false }),
  ],
  relations: [
    ...shortcuts.relations.blameable(),
    relation({
      id: 'image',
      to: 'Images',
      isMany: false,
      isRequired: true,
    }),
  ],
});
