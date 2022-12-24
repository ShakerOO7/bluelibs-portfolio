export default /* GraphQL */ `
  type Query {
    EducationFindOne(query: QueryInput): Education
    EducationFind(query: QueryInput): [Education]!
    EducationCount(query: QueryInput): Int!
  }

  type Mutation {
    EducationInsertOne(document: EducationInsertInput!): Education
    EducationUpdateOne(
      _id: ObjectId!
      document: EducationUpdateInput!
    ): Education!
    EducationDeleteOne(_id: ObjectId!): Boolean
  }

  type Subscription {
    EducationSubscription(body: EJSON): SubscriptionEvent
    EducationSubscriptionCount(filters: EJSON): SubscriptionCountEvent
  }
`;
