export default /* GraphQL */ `
  type Query {
    WorkExperienceFindOne(query: QueryInput): WorkExperience
    WorkExperienceFind(query: QueryInput): [WorkExperience]!
    WorkExperienceCount(query: QueryInput): Int!
  }

  type Mutation {
    WorkExperienceInsertOne(
      document: WorkExperienceInsertInput!
    ): WorkExperience
    WorkExperienceUpdateOne(
      _id: ObjectId!
      document: WorkExperienceUpdateInput!
    ): WorkExperience!
    WorkExperienceDeleteOne(_id: ObjectId!): Boolean
  }

  type Subscription {
    WorkExperienceSubscription(body: EJSON): SubscriptionEvent
    WorkExperienceSubscriptionCount(filters: EJSON): SubscriptionCountEvent
  }
`;
