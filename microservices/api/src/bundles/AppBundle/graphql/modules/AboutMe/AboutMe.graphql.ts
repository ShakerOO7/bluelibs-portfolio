export default /* GraphQL */ `
  type Query {
    AboutMeFindOne(query: QueryInput): AboutMe
    AboutMeFind(query: QueryInput): [AboutMe]!
    AboutMeCount(query: QueryInput): Int!
  }

  type Mutation {
    AboutMeInsertOne(document: AboutMeInsertInput!): AboutMe
    AboutMeUpdateOne(_id: ObjectId!, document: AboutMeUpdateInput!): AboutMe!
    AboutMeDeleteOne(_id: ObjectId!): Boolean
  }

  type Subscription {
    AboutMeSubscription(body: EJSON): SubscriptionEvent
    AboutMeSubscriptionCount(filters: EJSON): SubscriptionCountEvent
  }
`;
