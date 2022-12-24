/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { AddressInput } from "./Address.input";
import { WorkExperienceJobType } from "../../collections";
import { WorkExperienceWorkLocation } from "../../collections";

@Schema()
export class WorkExperienceInsertInput {
  @Is(() => Schema.from(AddressInput).nullable())
  address?: AddressInput;

  @Is(a.string().required())
  companyName: string;

  @Is(a.string().nullable())
  description?: string;

  @Is(a.date().nullable())
  endDate?: Date;

  @Is(a.string().required())
  jobTitle: string;

  @Is(
    a
      .string()
      .oneOf(Object.values(WorkExperienceJobType).concat(null))
      .required()
  )
  jobType: WorkExperienceJobType;

  @Is(a.date().nullable())
  startDate?: Date;

  @Is(
    a
      .string()
      .oneOf(Object.values(WorkExperienceWorkLocation).concat(null))
      .required()
  )
  workLocation: WorkExperienceWorkLocation;
}
