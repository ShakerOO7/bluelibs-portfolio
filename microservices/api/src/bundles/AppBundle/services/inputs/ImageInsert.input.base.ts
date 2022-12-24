/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class ImageInsertInput {
  @Is(a.string().required())
  downloadUrl: string;
}
