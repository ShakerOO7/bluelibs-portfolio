/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { User } from "../";
import { Image } from "../";

@Schema()
export class Project {
  @Is(an.objectId())
  _id?: ObjectId;

  @Is(a.string().nullable())
  codeUrl?: string;

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

  image?: Image;

  @Is(an.objectId().nullable())
  imageId?: ObjectId;

  /**
   * @description This field is used to identify if this object has been soft-deleted
   */
  @Is(a.boolean().nullable())
  isDeleted?: boolean;

  @Is(a.string().nullable())
  link?: string;

  @Is(a.string().required())
  name: string;

  @Is(a.string().nullable())
  techStack?: string;

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
