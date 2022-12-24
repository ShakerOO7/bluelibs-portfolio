/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class EducationInsertInput {
  @Is(a.string().required())
  degreeTitle: string;

  @Is(a.date().nullable())
  endDate?: Date;

  @Is(a.string().required())
  institute: string;

  @Is(a.date().nullable())
  startDate?: Date;
}
