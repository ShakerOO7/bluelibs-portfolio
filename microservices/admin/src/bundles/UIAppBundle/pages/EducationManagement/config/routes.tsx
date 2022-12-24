/** @overridable */
import { IRoute } from "@bluelibs/x-ui";
import * as React from "react";
import { EducationList } from "../components/List/EducationList";
import { EducationCreate } from "../components/Create/EducationCreate";
import { EducationEdit } from "../components/Edit/EducationEdit";
import { EducationView } from "../components/View/EducationView";

import { SettingFilled } from "@ant-design/icons";

export const EDUCATION_LIST: IRoute = {
  path: "/admin/education",
  component: EducationList,
  menu: {
    key: "EDUCATION_LIST",
    label: "management.education.menu.title",
    icon: SettingFilled,
  },
};

export const EDUCATION_CREATE: IRoute = {
  path: "/admin/education/create",
  component: EducationCreate,
};

export const EDUCATION_EDIT: IRoute<{ id: string }> = {
  path: "/admin/education/:id/edit",
  component: EducationEdit,
};

export const EDUCATION_VIEW: IRoute<{ id: string }> = {
  path: "/admin/education/:id/view",
  component: EducationView,
};
