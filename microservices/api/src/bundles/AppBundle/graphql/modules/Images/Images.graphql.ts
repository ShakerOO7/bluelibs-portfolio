export default /* GraphQL */ `
  type Query {
    ImagesFindOne(query: QueryInput): Image
    ImagesFind(query: QueryInput): [Image]!
    ImagesCount(query: QueryInput): Int!
  }

  type Mutation {
    ImagesInsertOne(document: ImageInsertInput!): Image
    ImagesUpdateOne(_id: ObjectId!, document: ImageUpdateInput!): Image!
    ImagesDeleteOne(_id: ObjectId!): Boolean
  }

  type Subscription {
    ImagesSubscription(body: EJSON): SubscriptionEvent
    ImagesSubscriptionCount(filters: EJSON): SubscriptionCountEvent
  }
`;
