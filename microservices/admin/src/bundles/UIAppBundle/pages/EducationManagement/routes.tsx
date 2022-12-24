import { IRoute } from "@bluelibs/x-ui";
import "./i18n";

import {
  EDUCATION_LIST as BASE_EDUCATION_LIST,
  EDUCATION_CREATE as BASE_EDUCATION_CREATE,
  EDUCATION_EDIT as BASE_EDUCATION_EDIT,
  EDUCATION_VIEW as BASE_EDUCATION_VIEW,
} from "./config/routes";

export const EDUCATION_LIST: IRoute = {
  ...BASE_EDUCATION_LIST,
};

export const EDUCATION_CREATE: IRoute = {
  ...BASE_EDUCATION_CREATE,
};

export const EDUCATION_EDIT: IRoute = {
  ...BASE_EDUCATION_EDIT,
};

export const EDUCATION_VIEW: IRoute = {
  ...BASE_EDUCATION_VIEW,
};
