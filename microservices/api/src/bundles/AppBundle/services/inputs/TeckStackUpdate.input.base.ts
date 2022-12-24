/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class TeckStackUpdateInput {
  @Is(an.objectId().nullable())
  imageId?: ObjectId;

  @Is(a.string().nullable())
  name?: string;

  @Is(a.number().nullable())
  order?: number;
}
