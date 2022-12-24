/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class ImageUpdateInput {
  @Is(a.string().nullable())
  downloadUrl?: string;
}
