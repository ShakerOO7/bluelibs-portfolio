import { collection, field, relation, shortcuts } from '../utils';

export const Projects = collection({
  id: 'Projects',
  representedBy: 'name',
  behaviors: {
    softdeletable: true,
  },
  mock: {
    count: 10,
  },
  fields: [
    shortcuts.field.softdeletable(),
    ...shortcuts.fields.timestampable(),
    field({
      id: 'name',
      type: field.types.STRING,
      isReducer: false,
    }),

    // Link to the deployed project
    field({
      id: 'link',
      type: field.types.STRING,
      isReducer: false,
      isRequired: false,
    }),

    // Code repository if available
    field({
      id: 'codeUrl',
      type: field.types.STRING,
      isReducer: false,
      isRequired: false,
    }),

    // This can be rich text description
    field({
      id: 'description',
      type: field.types.STRING,
      isReducer: false,
      isRequired: false,
    }),

    field({
      id: 'techStack',
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
