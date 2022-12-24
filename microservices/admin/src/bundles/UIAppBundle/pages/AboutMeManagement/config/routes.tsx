/** @overridable */
import { IRoute } from "@bluelibs/x-ui";
import * as React from "react";
import { AboutMeList } from "../components/List/AboutMeList";
import { AboutMeCreate } from "../components/Create/AboutMeCreate";
import { AboutMeEdit } from "../components/Edit/AboutMeEdit";
import { AboutMeView } from "../components/View/AboutMeView";

import { SettingFilled } from "@ant-design/icons";

export const ABOUT_ME_LIST: IRoute = {
  path: "/admin/about-me",
  component: AboutMeList,
  menu: {
    key: "ABOUT_ME_LIST",
    label: "management.about_me.menu.title",
    icon: SettingFilled,
  },
};

export const ABOUT_ME_CREATE: IRoute = {
  path: "/admin/about-me/create",
  component: AboutMeCreate,
};

export const ABOUT_ME_EDIT: IRoute<{ id: string }> = {
  path: "/admin/about-me/:id/edit",
  component: AboutMeEdit,
};

export const ABOUT_ME_VIEW: IRoute<{ id: string }> = {
  path: "/admin/about-me/:id/view",
  component: AboutMeView,
};
