/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { Address } from "../shared/Address";
import { User } from "../";
import { Image } from "../";

@Schema()
export class AboutMeSocialLinks {
  @Is(a.string().nullable())
  facebook?: string;

  @Is(a.string().nullable())
  twitter?: string;

  @Is(a.string().nullable())
  github?: string;

  @Is(a.string().nullable())
  linkedin?: string;

  @Is(a.string().nullable())
  meduim?: string;
}

@Schema()
export class AboutMe {
  @Is(an.objectId())
  _id?: ObjectId;

  @Is(() => Schema.from(Address).nullable())
  address?: Address;

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

  @Is(a.string().nullable())
  email?: string;

  @Is(a.string().required())
  fullname: string;

  image?: Image;

  @Is(an.objectId().nullable())
  imageId?: ObjectId;

  @Is(a.string().nullable())
  phone?: string;

  @Is(() => Schema.from(AboutMeSocialLinks).nullable())
  socialLinks?: AboutMeSocialLinks;

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
}
