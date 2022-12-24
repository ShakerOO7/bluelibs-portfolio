import { collection, field, relation, shortcuts } from '../utils';
import { Address } from './../shared-models/Address';

export const AboutMe = collection({
  id: 'AboutMe',
  representedBy: 'fullname',
  behaviors: {},
  mock: {
    count: 1,
  },
  fields: [
    ...shortcuts.fields.timestampable(),
    field({
      id: 'fullname',
      type: field.types.STRING,
      isReducer: false,
    }),
    field({
      id: 'email',
      type: field.types.STRING,
      isReducer: false,
      isRequired: false,
    }),
    field({
      id: 'phone',
      type: field.types.STRING,
      isReducer: false,
      isRequired: false,
    }),

    field.object('address', { model: Address, isRequired: false }),

    // Social links
    field.object('socialLinks', {
      isReducer: false,
      isRequired: false,
      subfields: [
        field({
          id: 'facebook',
          type: field.types.STRING,
          isReducer: false,
          isRequired: false,
        }),
        field({
          id: 'twitter',
          type: field.types.STRING,
          isReducer: false,
          isRequired: false,
        }),
        field({
          id: 'github',
          type: field.types.STRING,
          isReducer: false,
          isRequired: false,
        }),
        field({
          id: 'linkedin',
          type: field.types.STRING,
          isReducer: false,
          isRequired: false,
        }),
        field({
          id: 'meduim',
          type: field.types.STRING,
          isReducer: false,
          isRequired: false,
        }),
      ],
    }),

    // This can be rich text description
    field({
      id: 'description',
      type: field.types.STRING,
      isReducer: false,
      isRequired: false,
    }),
  ],
  relations: [
    ...shortcuts.relations.blameable(),
    relation({
      id: 'image',
      to: 'Images',
      isMany: false,
      isRequired: false,
    }),
  ],
});
