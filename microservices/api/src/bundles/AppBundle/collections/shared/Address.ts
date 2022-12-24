import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class Address {
  @Is(a.string().nullable())
  city?: string;

  @Is(a.string().nullable())
  country?: string;
}
