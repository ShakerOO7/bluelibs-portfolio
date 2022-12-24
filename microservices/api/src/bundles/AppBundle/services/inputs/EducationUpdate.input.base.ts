/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class EducationUpdateInput {
  @Is(a.string().nullable())
  degreeTitle?: string;

  @Is(a.date().nullable())
  endDate?: Date;

  @Is(a.string().nullable())
  institute?: string;

  @Is(a.date().nullable())
  startDate?: Date;
}
