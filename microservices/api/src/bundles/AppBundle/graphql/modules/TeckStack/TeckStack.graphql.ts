export default /* GraphQL */ `
  type Query {
    TeckStackFindOne(query: QueryInput): TeckStack
    TeckStackFind(query: QueryInput): [TeckStack]!
    TeckStackCount(query: QueryInput): Int!
  }

  type Mutation {
    TeckStackInsertOne(document: TeckStackInsertInput!): TeckStack
    TeckStackUpdateOne(
      _id: ObjectId!
      document: TeckStackUpdateInput!
    ): TeckStack!
    TeckStackDeleteOne(_id: ObjectId!): Boolean
  }

  type Subscription {
    TeckStackSubscription(body: EJSON): SubscriptionEvent
    TeckStackSubscriptionCount(filters: EJSON): SubscriptionCountEvent
  }
`;
