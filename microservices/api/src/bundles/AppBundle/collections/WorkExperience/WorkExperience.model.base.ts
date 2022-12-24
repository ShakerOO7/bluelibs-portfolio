/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { Address } from "../shared/Address";
import { User } from "../";
import { WorkExperienceJobType } from "./enums/WorkExperienceJobType.enum";
export { WorkExperienceJobType };
import { WorkExperienceWorkLocation } from "./enums/WorkExperienceWorkLocation.enum";
export { WorkExperienceWorkLocation };

@Schema()
export class WorkExperience {
  @Is(an.objectId())
  _id?: ObjectId;

  @Is(() => Schema.from(Address).nullable())
  address?: Address;

  @Is(a.string().required())
  companyName: string;

  /**
   * @description Represents the date when this object was created
   */
  @Is(a.date().required())
  createdAt: Date;

  /**
   * @description Represents the user who has created this object
   */
  createdBy?: User;

  /**
   * @description Represents the user's id who has created this object
   */
  @Is(an.objectId().nullable())
  createdById?: ObjectId;

  @Is(a.string().nullable())
  description?: string;

  @Is(a.date().nullable())
  endDate?: Date;

  /**
   * @description This field is used to identify if this object has been soft-deleted
   */
  @Is(a.boolean().nullable())
  isDeleted?: boolean;

  @Is(a.string().required())
  jobTitle: string;

  @Is(
    a
      .string()
      .oneOf(Object.values(WorkExperienceJobType).concat(null))
      .required()
  )
  jobType: WorkExperienceJobType;

  @Is(a.date().nullable())
  startDate?: Date;

  /**
   * @description Represents the last time when the object was updated
   */
  @Is(a.date().required())
  updatedAt: Date;

  /**
   * @description Represents the user who has made the latest update on this object
   */
  updatedBy?: User;

  /**
   * @description Represents the user's id who has made the latest update on this object
   */
  @Is(an.objectId().nullable())
  updatedById?: ObjectId;

  @Is(
    a
      .string()
      .oneOf(Object.values(WorkExperienceWorkLocation).concat(null))
      .required()
  )
  workLocation: WorkExperienceWorkLocation;
}
