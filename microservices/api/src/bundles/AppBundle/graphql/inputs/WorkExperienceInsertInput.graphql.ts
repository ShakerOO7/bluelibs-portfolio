export default /* GraphQL */ `
  input WorkExperienceInsertInput {
    address: AddressInput
    companyName: String!
    description: String
    endDate: Date
    jobTitle: String!
    jobType: WorkExperienceJobType!
    startDate: Date
    workLocation: WorkExperienceWorkLocation!
  }
`;
