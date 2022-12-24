/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { AddressInput } from "./Address.input";

@Schema()
export class AboutMeSocialLinksInput {
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
export class AboutMeInsertInput {
  @Is(() => Schema.from(AddressInput).nullable())
  address?: AddressInput;

  @Is(a.string().nullable())
  description?: string;

  @Is(a.string().nullable())
  email?: string;

  @Is(a.string().required())
  fullname: string;

  @Is(an.objectId().nullable())
  imageId?: ObjectId;

  @Is(a.string().nullable())
  phone?: string;

  @Is(() => Schema.from(AboutMeSocialLinksInput).nullable())
  socialLinks?: AboutMeSocialLinksInput;
}
