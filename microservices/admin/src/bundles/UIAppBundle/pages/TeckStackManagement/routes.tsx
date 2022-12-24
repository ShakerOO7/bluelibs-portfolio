import { IRoute } from "@bluelibs/x-ui";
import "./i18n";

import {
  TECK_STACK_LIST as BASE_TECK_STACK_LIST,
  TECK_STACK_CREATE as BASE_TECK_STACK_CREATE,
  TECK_STACK_EDIT as BASE_TECK_STACK_EDIT,
  TECK_STACK_VIEW as BASE_TECK_STACK_VIEW,
} from "./config/routes";

export const TECK_STACK_LIST: IRoute = {
  ...BASE_TECK_STACK_LIST,
};

export const TECK_STACK_CREATE: IRoute = {
  ...BASE_TECK_STACK_CREATE,
};

export const TECK_STACK_EDIT: IRoute = {
  ...BASE_TECK_STACK_EDIT,
};

export const TECK_STACK_VIEW: IRoute = {
  ...BASE_TECK_STACK_VIEW,
};
