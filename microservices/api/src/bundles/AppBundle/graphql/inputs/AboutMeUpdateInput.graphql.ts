export default /* GraphQL */ `
  input AboutMeUpdateInput {
    address: AddressInput
    description: String
    email: String
    fullname: String
    imageId: ObjectId
    phone: String
    socialLinks: AboutMeSocialLinksInput
  }

  input AboutMeSocialLinksInput {
    facebook: String
    twitter: String
    github: String
    linkedin: String
    meduim: String
  }
`;
