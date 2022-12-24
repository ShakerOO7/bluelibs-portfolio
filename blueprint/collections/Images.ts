import {
  collection,
  field,
  shortcuts,
} from '../utils';

export const Images = collection({
  id: 'Images',
  representedBy: 'downloadUrl',
  behaviors: {},
  mock: {
    count: 10,
  },
  fields: [
    ...shortcuts.fields.timestampable(),
    field({
      id: 'downloadUrl',
      type: field.types.STRING,
      isReducer: false,
    }),
  ],
  relations: [...shortcuts.relations.blameable()],
});
