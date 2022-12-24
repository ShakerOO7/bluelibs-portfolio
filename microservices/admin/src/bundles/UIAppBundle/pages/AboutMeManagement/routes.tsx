import { IRoute } from "@bluelibs/x-ui";
import "./i18n";

import {
  ABOUT_ME_LIST as BASE_ABOUT_ME_LIST,
  ABOUT_ME_CREATE as BASE_ABOUT_ME_CREATE,
  ABOUT_ME_EDIT as BASE_ABOUT_ME_EDIT,
  ABOUT_ME_VIEW as BASE_ABOUT_ME_VIEW,
} from "./config/routes";

export const ABOUT_ME_LIST: IRoute = {
  ...BASE_ABOUT_ME_LIST,
};

export const ABOUT_ME_CREATE: IRoute = {
  ...BASE_ABOUT_ME_CREATE,
};

export const ABOUT_ME_EDIT: IRoute = {
  ...BASE_ABOUT_ME_EDIT,
};

export const ABOUT_ME_VIEW: IRoute = {
  ...BASE_ABOUT_ME_VIEW,
};
