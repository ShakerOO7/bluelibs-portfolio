/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class ProjectInsertInput {
  @Is(a.string().nullable())
  codeUrl?: string;

  @Is(a.string().nullable())
  description?: string;

  @Is(an.objectId().nullable())
  imageId?: ObjectId;

  @Is(a.string().nullable())
  link?: string;

  @Is(a.string().required())
  name: string;

  @Is(a.string().nullable())
  techStack?: string;
}
