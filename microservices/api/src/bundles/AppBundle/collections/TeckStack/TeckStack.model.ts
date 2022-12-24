export * from "./TeckStack.model.base";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { TeckStack as BaseTeckStack } from "./TeckStack.model.base";

@Schema()
export class TeckStack extends BaseTeckStack {
  // You can extend the base here
}
