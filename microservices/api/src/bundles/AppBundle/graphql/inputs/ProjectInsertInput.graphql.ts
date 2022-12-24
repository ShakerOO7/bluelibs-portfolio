export default /* GraphQL */ `
  input ProjectInsertInput {
    codeUrl: String
    description: String
    imageId: ObjectId
    link: String
    name: String!
    techStack: String
  }
`;
