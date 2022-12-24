export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date Custom scalar type */
  Date: any;
  /** The `EJSON` scalar type represents EJSON values as specified by [Meteor EJSON](https://docs.meteor.com/api/ejson.html). */
  EJSON: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** ObjectId custom scalar type */
  ObjectId: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AboutMe = {
  __typename?: 'AboutMe';
  _id?: Maybe<Scalars['ObjectId']>;
  address?: Maybe<Address>;
  /** Represents the date when this object was created */
  createdAt: Scalars['Date'];
  /** Represents the user who has created this object */
  createdBy?: Maybe<User>;
  /** Represents the user's id who has created this object */
  createdById?: Maybe<Scalars['ObjectId']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fullname: Scalars['String'];
  image?: Maybe<Image>;
  imageId?: Maybe<Scalars['ObjectId']>;
  phone?: Maybe<Scalars['String']>;
  socialLinks?: Maybe<AboutMeSocialLinks>;
  /** Represents the last time when the object was updated */
  updatedAt: Scalars['Date'];
  /** Represents the user who has made the latest update on this object */
  updatedBy?: Maybe<User>;
  /** Represents the user's id who has made the latest update on this object */
  updatedById?: Maybe<Scalars['ObjectId']>;
};

export type AboutMeInsertInput = {
  address?: Maybe<AddressInput>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fullname: Scalars['String'];
  imageId?: Maybe<Scalars['ObjectId']>;
  phone?: Maybe<Scalars['String']>;
  socialLinks?: Maybe<AboutMeSocialLinksInput>;
};

export type AboutMeSocialLinks = {
  __typename?: 'AboutMeSocialLinks';
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  meduim?: Maybe<Scalars['String']>;
};

export type AboutMeSocialLinksInput = {
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  meduim?: Maybe<Scalars['String']>;
};

export type AboutMeUpdateInput = {
  address?: Maybe<AddressInput>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  imageId?: Maybe<Scalars['ObjectId']>;
  phone?: Maybe<Scalars['String']>;
  socialLinks?: Maybe<AboutMeSocialLinksInput>;
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
};

export type AppFile = {
  __typename?: 'AppFile';
  _id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  downloadUrl: Scalars['String'];
  size: Scalars['Int'];
  mimeType: Scalars['String'];
  thumbs: Array<Maybe<AppFileThumb>>;
  resourceType?: Maybe<Scalars['String']>;
  resourceId?: Maybe<Scalars['String']>;
  uploadedById?: Maybe<Scalars['String']>;
  uploadedBy?: Maybe<User>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};


export type AppFilethumbsArgs = {
  ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AppFileGroup = {
  __typename?: 'AppFileGroup';
  _id: Scalars['ObjectId'];
  name?: Maybe<Scalars['String']>;
  files: Array<Maybe<AppFile>>;
  filesIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type AppFileThumb = {
  __typename?: 'AppFileThumb';
  /** @deprecated Use 'type' instead, due to cache mismatch with Apollo */
  id: Scalars['String'];
  type: Scalars['String'];
  path: Scalars['String'];
  downloadUrl: Scalars['String'];
};

export type ChangePasswordInput = {
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
};


export type DocumentUpdateInput = {
  _id: Scalars['ObjectId'];
  modifier: Scalars['EJSON'];
};


export type Education = {
  __typename?: 'Education';
  _id?: Maybe<Scalars['ObjectId']>;
  /** Represents the date when this object was created */
  createdAt: Scalars['Date'];
  /** Represents the user who has created this object */
  createdBy?: Maybe<User>;
  /** Represents the user's id who has created this object */
  createdById?: Maybe<Scalars['ObjectId']>;
  degreeTitle: Scalars['String'];
  endDate?: Maybe<Scalars['Date']>;
  institute: Scalars['String'];
  startDate?: Maybe<Scalars['Date']>;
  /** Represents the last time when the object was updated */
  updatedAt: Scalars['Date'];
  /** Represents the user who has made the latest update on this object */
  updatedBy?: Maybe<User>;
  /** Represents the user's id who has made the latest update on this object */
  updatedById?: Maybe<Scalars['ObjectId']>;
};

export type EducationInsertInput = {
  degreeTitle: Scalars['String'];
  endDate?: Maybe<Scalars['Date']>;
  institute: Scalars['String'];
  startDate?: Maybe<Scalars['Date']>;
};

export type EducationUpdateInput = {
  degreeTitle?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Date']>;
  institute?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
};

export type ForgotPasswordInput = {
  email: Scalars['String'];
};

export type Image = {
  __typename?: 'Image';
  _id?: Maybe<Scalars['ObjectId']>;
  /** Represents the date when this object was created */
  createdAt: Scalars['Date'];
  /** Represents the user who has created this object */
  createdBy?: Maybe<User>;
  /** Represents the user's id who has created this object */
  createdById?: Maybe<Scalars['ObjectId']>;
  downloadUrl: Scalars['String'];
  /** Represents the last time when the object was updated */
  updatedAt: Scalars['Date'];
  /** Represents the user who has made the latest update on this object */
  updatedBy?: Maybe<User>;
  /** Represents the user's id who has made the latest update on this object */
  updatedById?: Maybe<Scalars['ObjectId']>;
};

export type ImageInsertInput = {
  downloadUrl: Scalars['String'];
};

export type ImageUpdateInput = {
  downloadUrl?: Maybe<Scalars['String']>;
};



export type LoginInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token?: Maybe<Scalars['String']>;
  redirectUrl?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** This mutation is used to create a new token based on the existing one. Your previous token will no longer be usable. */
  reissueToken: Scalars['String'];
  AboutMeInsertOne?: Maybe<AboutMe>;
  AboutMeUpdateOne: AboutMe;
  AboutMeDeleteOne?: Maybe<Scalars['Boolean']>;
  EducationInsertOne?: Maybe<Education>;
  EducationUpdateOne: Education;
  EducationDeleteOne?: Maybe<Scalars['Boolean']>;
  ImagesInsertOne?: Maybe<Image>;
  ImagesUpdateOne: Image;
  ImagesDeleteOne?: Maybe<Scalars['Boolean']>;
  ProjectsInsertOne?: Maybe<Project>;
  ProjectsUpdateOne: Project;
  ProjectsDeleteOne?: Maybe<Scalars['Boolean']>;
  TeckStackInsertOne?: Maybe<TeckStack>;
  TeckStackUpdateOne: TeckStack;
  TeckStackDeleteOne?: Maybe<Scalars['Boolean']>;
  AppFileGroupsInsertOne?: Maybe<AppFileGroup>;
  AppFilesDeleteOne?: Maybe<Scalars['Boolean']>;
  AppFileGroupsDeleteOne?: Maybe<Scalars['Boolean']>;
  AppFileUploadToGroup?: Maybe<AppFile>;
  AppFileUpload?: Maybe<AppFile>;
  UsersInsertOne?: Maybe<User>;
  UsersUpdateOne: User;
  UsersDeleteOne?: Maybe<Scalars['Boolean']>;
  WorkExperienceInsertOne?: Maybe<WorkExperience>;
  WorkExperienceUpdateOne: WorkExperience;
  WorkExperienceDeleteOne?: Maybe<Scalars['Boolean']>;
  register: RegistrationResponse;
  changePassword?: Maybe<Scalars['Boolean']>;
  login: LoginResponse;
  logout?: Maybe<Scalars['Boolean']>;
  resetPassword: ResetPasswordResponse;
  forgotPassword?: Maybe<Scalars['Boolean']>;
  verifyEmail: VerifyEmailResponse;
  requestLoginLink: RequestLoginLinkInputResponse;
  verifyMagicCode: VerifyMagicLinkResponse;
};


export type MutationreissueTokenArgs = {
  token: Scalars['String'];
};


export type MutationAboutMeInsertOneArgs = {
  document: AboutMeInsertInput;
};


export type MutationAboutMeUpdateOneArgs = {
  _id: Scalars['ObjectId'];
  document: AboutMeUpdateInput;
};


export type MutationAboutMeDeleteOneArgs = {
  _id: Scalars['ObjectId'];
};


export type MutationEducationInsertOneArgs = {
  document: EducationInsertInput;
};


export type MutationEducationUpdateOneArgs = {
  _id: Scalars['ObjectId'];
  document: EducationUpdateInput;
};


export type MutationEducationDeleteOneArgs = {
  _id: Scalars['ObjectId'];
};


export type MutationImagesInsertOneArgs = {
  document: ImageInsertInput;
};


export type MutationImagesUpdateOneArgs = {
  _id: Scalars['ObjectId'];
  document: ImageUpdateInput;
};


export type MutationImagesDeleteOneArgs = {
  _id: Scalars['ObjectId'];
};


export type MutationProjectsInsertOneArgs = {
  document: ProjectInsertInput;
};


export type MutationProjectsUpdateOneArgs = {
  _id: Scalars['ObjectId'];
  document: ProjectUpdateInput;
};


export type MutationProjectsDeleteOneArgs = {
  _id: Scalars['ObjectId'];
};


export type MutationTeckStackInsertOneArgs = {
  document: TeckStackInsertInput;
};


export type MutationTeckStackUpdateOneArgs = {
  _id: Scalars['ObjectId'];
  document: TeckStackUpdateInput;
};


export type MutationTeckStackDeleteOneArgs = {
  _id: Scalars['ObjectId'];
};


export type MutationAppFileGroupsInsertOneArgs = {
  document: Scalars['EJSON'];
};


export type MutationAppFilesDeleteOneArgs = {
  _id: Scalars['ObjectId'];
};


export type MutationAppFileGroupsDeleteOneArgs = {
  _id: Scalars['ObjectId'];
};


export type MutationAppFileUploadToGroupArgs = {
  groupId: Scalars['ObjectId'];
  upload: Scalars['Upload'];
  context?: Maybe<Scalars['String']>;
};


export type MutationAppFileUploadArgs = {
  upload: Scalars['Upload'];
  context?: Maybe<Scalars['String']>;
};


export type MutationUsersInsertOneArgs = {
  document: UserInsertInput;
};


export type MutationUsersUpdateOneArgs = {
  _id: Scalars['ObjectId'];
  document: UserUpdateInput;
};


export type MutationUsersDeleteOneArgs = {
  _id: Scalars['ObjectId'];
};


export type MutationWorkExperienceInsertOneArgs = {
  document: WorkExperienceInsertInput;
};


export type MutationWorkExperienceUpdateOneArgs = {
  _id: Scalars['ObjectId'];
  document: WorkExperienceUpdateInput;
};


export type MutationWorkExperienceDeleteOneArgs = {
  _id: Scalars['ObjectId'];
};


export type MutationregisterArgs = {
  input: RegistrationInput;
};


export type MutationchangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationloginArgs = {
  input: LoginInput;
};


export type MutationresetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationforgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationverifyEmailArgs = {
  input: VerifyEmailInput;
};


export type MutationrequestLoginLinkArgs = {
  input: RequestLoginLinkInput;
};


export type MutationverifyMagicCodeArgs = {
  input: VerifyMagicLinkInput;
};


export type Project = {
  __typename?: 'Project';
  _id?: Maybe<Scalars['ObjectId']>;
  codeUrl?: Maybe<Scalars['String']>;
  /** Represents the date when this object was created */
  createdAt: Scalars['Date'];
  /** Represents the user who has created this object */
  createdBy?: Maybe<User>;
  /** Represents the user's id who has created this object */
  createdById?: Maybe<Scalars['ObjectId']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
  imageId?: Maybe<Scalars['ObjectId']>;
  link?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  techStack?: Maybe<Scalars['String']>;
  /** Represents the last time when the object was updated */
  updatedAt: Scalars['Date'];
  /** Represents the user who has made the latest update on this object */
  updatedBy?: Maybe<User>;
  /** Represents the user's id who has made the latest update on this object */
  updatedById?: Maybe<Scalars['ObjectId']>;
};

export type ProjectInsertInput = {
  codeUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  imageId?: Maybe<Scalars['ObjectId']>;
  link?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  techStack?: Maybe<Scalars['String']>;
};

export type ProjectUpdateInput = {
  codeUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  imageId?: Maybe<Scalars['ObjectId']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  techStack?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  AboutMeFindOne?: Maybe<AboutMe>;
  AboutMeFind: Array<Maybe<AboutMe>>;
  AboutMeCount: Scalars['Int'];
  EducationFindOne?: Maybe<Education>;
  EducationFind: Array<Maybe<Education>>;
  EducationCount: Scalars['Int'];
  ImagesFindOne?: Maybe<Image>;
  ImagesFind: Array<Maybe<Image>>;
  ImagesCount: Scalars['Int'];
  ProjectsFindOne?: Maybe<Project>;
  ProjectsFind: Array<Maybe<Project>>;
  ProjectsCount: Scalars['Int'];
  TeckStackFindOne?: Maybe<TeckStack>;
  TeckStackFind: Array<Maybe<TeckStack>>;
  TeckStackCount: Scalars['Int'];
  AppFilesFindOne?: Maybe<AppFile>;
  AppFilesFind?: Maybe<Array<Maybe<AppFile>>>;
  AppFileGroupsFindOne?: Maybe<AppFileGroup>;
  AppFileGroupsFind?: Maybe<Array<Maybe<AppFileGroup>>>;
  UsersFindOne?: Maybe<User>;
  UsersFind: Array<Maybe<User>>;
  UsersCount: Scalars['Int'];
  WorkExperienceFindOne?: Maybe<WorkExperience>;
  WorkExperienceFind: Array<Maybe<WorkExperience>>;
  WorkExperienceCount: Scalars['Int'];
  me: User;
  framework?: Maybe<Scalars['String']>;
};


export type QueryAboutMeFindOneArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryAboutMeFindArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryAboutMeCountArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryEducationFindOneArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryEducationFindArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryEducationCountArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryImagesFindOneArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryImagesFindArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryImagesCountArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryProjectsFindOneArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryProjectsFindArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryProjectsCountArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryTeckStackFindOneArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryTeckStackFindArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryTeckStackCountArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryAppFilesFindOneArgs = {
  query: QueryInput;
};


export type QueryAppFilesFindArgs = {
  query: QueryInput;
};


export type QueryAppFileGroupsFindOneArgs = {
  query: QueryInput;
};


export type QueryAppFileGroupsFindArgs = {
  query: QueryInput;
};


export type QueryUsersFindOneArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryUsersFindArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryUsersCountArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryWorkExperienceFindOneArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryWorkExperienceFindArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryWorkExperienceCountArgs = {
  query?: Maybe<QueryInput>;
};

export type QueryInput = {
  filters?: Maybe<Scalars['EJSON']>;
  options?: Maybe<QueryOptionsInput>;
};

export type QueryOptionsInput = {
  sort?: Maybe<Scalars['JSON']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  /** This is the Nova body that will get merged deeply with your request body. Useful for passing arguments. */
  sideBody?: Maybe<Scalars['EJSON']>;
};

export type RegistrationInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type RegistrationResponse = {
  __typename?: 'RegistrationResponse';
  /** Please not that if the user is required to validate his email for logging in, token will be null */
  token?: Maybe<Scalars['String']>;
};

export type RequestLoginLinkInput = {
  username?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type RequestLoginLinkInputResponse = {
  __typename?: 'RequestLoginLinkInputResponse';
  magicCodeSent: Scalars['Boolean'];
  userId: Scalars['String'];
  method?: Maybe<Scalars['String']>;
  confirmationFormat?: Maybe<Scalars['String']>;
};

export type ResetPasswordInput = {
  username: Scalars['String'];
  token: Scalars['String'];
  newPassword: Scalars['String'];
};

export type ResetPasswordResponse = {
  __typename?: 'ResetPasswordResponse';
  token: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  AboutMeSubscription?: Maybe<SubscriptionEvent>;
  AboutMeSubscriptionCount?: Maybe<SubscriptionCountEvent>;
  EducationSubscription?: Maybe<SubscriptionEvent>;
  EducationSubscriptionCount?: Maybe<SubscriptionCountEvent>;
  ImagesSubscription?: Maybe<SubscriptionEvent>;
  ImagesSubscriptionCount?: Maybe<SubscriptionCountEvent>;
  ProjectsSubscription?: Maybe<SubscriptionEvent>;
  ProjectsSubscriptionCount?: Maybe<SubscriptionCountEvent>;
  TeckStackSubscription?: Maybe<SubscriptionEvent>;
  TeckStackSubscriptionCount?: Maybe<SubscriptionCountEvent>;
  UsersSubscription?: Maybe<SubscriptionEvent>;
  UsersSubscriptionCount?: Maybe<SubscriptionCountEvent>;
  WorkExperienceSubscription?: Maybe<SubscriptionEvent>;
  WorkExperienceSubscriptionCount?: Maybe<SubscriptionCountEvent>;
};


export type SubscriptionAboutMeSubscriptionArgs = {
  body?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionAboutMeSubscriptionCountArgs = {
  filters?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionEducationSubscriptionArgs = {
  body?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionEducationSubscriptionCountArgs = {
  filters?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionImagesSubscriptionArgs = {
  body?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionImagesSubscriptionCountArgs = {
  filters?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionProjectsSubscriptionArgs = {
  body?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionProjectsSubscriptionCountArgs = {
  filters?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionTeckStackSubscriptionArgs = {
  body?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionTeckStackSubscriptionCountArgs = {
  filters?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionUsersSubscriptionArgs = {
  body?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionUsersSubscriptionCountArgs = {
  filters?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionWorkExperienceSubscriptionArgs = {
  body?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionWorkExperienceSubscriptionCountArgs = {
  filters?: Maybe<Scalars['EJSON']>;
};

export type SubscriptionCountEvent = {
  __typename?: 'SubscriptionCountEvent';
  count?: Maybe<Scalars['Int']>;
};

export type SubscriptionEvent = {
  __typename?: 'SubscriptionEvent';
  event: SubscriptionEventType;
  document?: Maybe<Scalars['EJSON']>;
};

export enum SubscriptionEventType {
  added = 'added',
  changed = 'changed',
  removed = 'removed',
  ready = 'ready'
}

export type TeckStack = {
  __typename?: 'TeckStack';
  _id?: Maybe<Scalars['ObjectId']>;
  /** Represents the date when this object was created */
  createdAt: Scalars['Date'];
  /** Represents the user who has created this object */
  createdBy?: Maybe<User>;
  /** Represents the user's id who has created this object */
  createdById?: Maybe<Scalars['ObjectId']>;
  image: Image;
  imageId: Scalars['ObjectId'];
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  /** Represents the last time when the object was updated */
  updatedAt: Scalars['Date'];
  /** Represents the user who has made the latest update on this object */
  updatedBy?: Maybe<User>;
  /** Represents the user's id who has made the latest update on this object */
  updatedById?: Maybe<Scalars['ObjectId']>;
};

export type TeckStackInsertInput = {
  imageId: Scalars['ObjectId'];
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

export type TeckStackUpdateInput = {
  imageId?: Maybe<Scalars['ObjectId']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};


export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ObjectId']>;
  /** Represents the date when this object was created */
  createdAt: Scalars['Date'];
  /** Represents the user who has created this object */
  createdBy?: Maybe<User>;
  /** Represents the user's id who has created this object */
  createdById?: Maybe<Scalars['ObjectId']>;
  email: Scalars['String'];
  fullName: Scalars['String'];
  isEnabled: Scalars['Boolean'];
  profile: UserProfile;
  roles: Array<Maybe<UserRole>>;
  /** Represents the last time when the object was updated */
  updatedAt: Scalars['Date'];
  /** Represents the user who has made the latest update on this object */
  updatedBy?: Maybe<User>;
  /** Represents the user's id who has made the latest update on this object */
  updatedById?: Maybe<Scalars['ObjectId']>;
};

export type UserInsertInput = {
  isEnabled: Scalars['Boolean'];
  profile: UserProfileInput;
  roles: Array<Maybe<UserRole>>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type UserProfileInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export enum UserRole {
  ADMIN = 'ADMIN'
}

export type UserUpdateInput = {
  isEnabled?: Maybe<Scalars['Boolean']>;
  profile?: Maybe<UserProfileInput>;
  roles?: Maybe<Array<Maybe<UserRole>>>;
};

export type VerifyEmailInput = {
  username?: Maybe<Scalars['String']>;
  token: Scalars['String'];
};

export type VerifyEmailResponse = {
  __typename?: 'VerifyEmailResponse';
  token: Scalars['String'];
};

export type VerifyMagicLinkInput = {
  userId: Scalars['String'];
  magicCode: Scalars['String'];
};

export type VerifyMagicLinkResponse = {
  __typename?: 'VerifyMagicLinkResponse';
  token?: Maybe<Scalars['String']>;
  redirectUrl?: Maybe<Scalars['String']>;
};

export type WorkExperience = {
  __typename?: 'WorkExperience';
  _id?: Maybe<Scalars['ObjectId']>;
  address?: Maybe<Address>;
  companyName: Scalars['String'];
  /** Represents the date when this object was created */
  createdAt: Scalars['Date'];
  /** Represents the user who has created this object */
  createdBy?: Maybe<User>;
  /** Represents the user's id who has created this object */
  createdById?: Maybe<Scalars['ObjectId']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Date']>;
  jobTitle: Scalars['String'];
  jobType: WorkExperienceJobType;
  startDate?: Maybe<Scalars['Date']>;
  /** Represents the last time when the object was updated */
  updatedAt: Scalars['Date'];
  /** Represents the user who has made the latest update on this object */
  updatedBy?: Maybe<User>;
  /** Represents the user's id who has made the latest update on this object */
  updatedById?: Maybe<Scalars['ObjectId']>;
  workLocation: WorkExperienceWorkLocation;
};

export type WorkExperienceInsertInput = {
  address?: Maybe<AddressInput>;
  companyName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Date']>;
  jobTitle: Scalars['String'];
  jobType: WorkExperienceJobType;
  startDate?: Maybe<Scalars['Date']>;
  workLocation: WorkExperienceWorkLocation;
};

export enum WorkExperienceJobType {
  FULL_TIME = 'FULL_TIME',
  PART_TIME = 'PART_TIME',
  CONTRACT = 'CONTRACT',
  INTERNSHIP = 'INTERNSHIP'
}

export type WorkExperienceUpdateInput = {
  address?: Maybe<AddressInput>;
  companyName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Date']>;
  jobTitle?: Maybe<Scalars['String']>;
  jobType?: Maybe<WorkExperienceJobType>;
  startDate?: Maybe<Scalars['Date']>;
  workLocation?: Maybe<WorkExperienceWorkLocation>;
};

export enum WorkExperienceWorkLocation {
  REMOTE = 'REMOTE',
  ON_SITE = 'ON_SITE',
  HYBRID = 'HYBRID'
}
