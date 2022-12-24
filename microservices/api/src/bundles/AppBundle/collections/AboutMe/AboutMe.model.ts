export * from "./AboutMe.model.base";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { AboutMe as BaseAboutMe } from "./AboutMe.model.base";
export { AboutMeSocialLinks } from "./AboutMe.model.base";

@Schema()
export class AboutMe extends BaseAboutMe {
  // You can extend the base here
}
