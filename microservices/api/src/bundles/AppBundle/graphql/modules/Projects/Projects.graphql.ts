export default /* GraphQL */ `
  type Query {
    ProjectsFindOne(query: QueryInput): Project
    ProjectsFind(query: QueryInput): [Project]!
    ProjectsCount(query: QueryInput): Int!
  }

  type Mutation {
    ProjectsInsertOne(document: ProjectInsertInput!): Project
    ProjectsUpdateOne(_id: ObjectId!, document: ProjectUpdateInput!): Project!
    ProjectsDeleteOne(_id: ObjectId!): Boolean
  }

  type Subscription {
    ProjectsSubscription(body: EJSON): SubscriptionEvent
    ProjectsSubscriptionCount(filters: EJSON): SubscriptionCountEvent
  }
`;
