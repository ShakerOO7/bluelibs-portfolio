export default /* GraphQL */ `
  type AboutMe {
    _id: ObjectId
    address: Address

    """
    Represents the date when this object was created
    """
    createdAt: Date!

    """
    Represents the user who has created this object
    """
    createdBy: User

    """
    Represents the user's id who has created this object
    """
    createdById: ObjectId
    description: String
    email: String
    fullname: String!
    image: Image
    imageId: ObjectId
    phone: String
    socialLinks: AboutMeSocialLinks

    """
    Represents the last time when the object was updated
    """
    updatedAt: Date!

    """
    Represents the user who has made the latest update on this object
    """
    updatedBy: User

    """
    Represents the user's id who has made the latest update on this object
    """
    updatedById: ObjectId
  }

  type AboutMeSocialLinks {
    facebook: String
    twitter: String
    github: String
    linkedin: String
    meduim: String
  }
`;
