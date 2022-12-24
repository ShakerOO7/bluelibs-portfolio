import { IRoute } from "@bluelibs/x-ui";
import "./i18n";

import {
  IMAGES_LIST as BASE_IMAGES_LIST,
  IMAGES_CREATE as BASE_IMAGES_CREATE,
  IMAGES_EDIT as BASE_IMAGES_EDIT,
  IMAGES_VIEW as BASE_IMAGES_VIEW,
} from "./config/routes";

export const IMAGES_LIST: IRoute = {
  ...BASE_IMAGES_LIST,
};

export const IMAGES_CREATE: IRoute = {
  ...BASE_IMAGES_CREATE,
};

export const IMAGES_EDIT: IRoute = {
  ...BASE_IMAGES_EDIT,
};

export const IMAGES_VIEW: IRoute = {
  ...BASE_IMAGES_VIEW,
};
