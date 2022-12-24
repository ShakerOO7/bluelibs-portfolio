export default /* GraphQL */ `
  input WorkExperienceUpdateInput {
    address: AddressInput
    companyName: String
    description: String
    endDate: Date
    jobTitle: String
    jobType: WorkExperienceJobType
    startDate: Date
    workLocation: WorkExperienceWorkLocation
  }
`;
