/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class TeckStackInsertInput {
  @Is(an.objectId().required())
  imageId: ObjectId;

  @Is(a.string().nullable())
  name?: string;

  @Is(a.number().nullable())
  order?: number;
}
