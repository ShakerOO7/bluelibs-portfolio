import { IRoute } from "@bluelibs/x-ui";
import "./i18n";

import {
  PROJECTS_LIST as BASE_PROJECTS_LIST,
  PROJECTS_CREATE as BASE_PROJECTS_CREATE,
  PROJECTS_EDIT as BASE_PROJECTS_EDIT,
  PROJECTS_VIEW as BASE_PROJECTS_VIEW,
} from "./config/routes";

export const PROJECTS_LIST: IRoute = {
  ...BASE_PROJECTS_LIST,
};

export const PROJECTS_CREATE: IRoute = {
  ...BASE_PROJECTS_CREATE,
};

export const PROJECTS_EDIT: IRoute = {
  ...BASE_PROJECTS_EDIT,
};

export const PROJECTS_VIEW: IRoute = {
  ...BASE_PROJECTS_VIEW,
};
