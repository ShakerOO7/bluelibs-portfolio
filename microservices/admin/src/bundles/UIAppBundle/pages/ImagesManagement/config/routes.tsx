/** @overridable */
import { IRoute } from "@bluelibs/x-ui";
import * as React from "react";
import { ImagesList } from "../components/List/ImagesList";
import { ImagesCreate } from "../components/Create/ImagesCreate";
import { ImagesEdit } from "../components/Edit/ImagesEdit";
import { ImagesView } from "../components/View/ImagesView";

import { SettingFilled } from "@ant-design/icons";

export const IMAGES_LIST: IRoute = {
  path: "/admin/images",
  component: ImagesList,
  menu: {
    key: "IMAGES_LIST",
    label: "management.images.menu.title",
    icon: SettingFilled,
  },
};

export const IMAGES_CREATE: IRoute = {
  path: "/admin/images/create",
  component: ImagesCreate,
};

export const IMAGES_EDIT: IRoute<{ id: string }> = {
  path: "/admin/images/:id/edit",
  component: ImagesEdit,
};

export const IMAGES_VIEW: IRoute<{ id: string }> = {
  path: "/admin/images/:id/view",
  component: ImagesView,
};
