import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { AboutMeInsertInput as BaseAboutMeInsertInput } from "./AboutMeInsert.input.base";

@Schema()
export class AboutMeInsertInput extends BaseAboutMeInsertInput {
  // You can extend the base here
}
