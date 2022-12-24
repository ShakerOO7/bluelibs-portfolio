/** @overridable */
import { IRoute } from "@bluelibs/x-ui";
import * as React from "react";
import { WorkExperienceList } from "../components/List/WorkExperienceList";
import { WorkExperienceCreate } from "../components/Create/WorkExperienceCreate";
import { WorkExperienceEdit } from "../components/Edit/WorkExperienceEdit";
import { WorkExperienceView } from "../components/View/WorkExperienceView";

import { SettingFilled } from "@ant-design/icons";

export const WORK_EXPERIENCE_LIST: IRoute = {
  path: "/admin/work-experience",
  component: WorkExperienceList,
  menu: {
    key: "WORK_EXPERIENCE_LIST",
    label: "management.work_experience.menu.title",
    icon: SettingFilled,
  },
};

export const WORK_EXPERIENCE_CREATE: IRoute = {
  path: "/admin/work-experience/create",
  component: WorkExperienceCreate,
};

export const WORK_EXPERIENCE_EDIT: IRoute<{ id: string }> = {
  path: "/admin/work-experience/:id/edit",
  component: WorkExperienceEdit,
};

export const WORK_EXPERIENCE_VIEW: IRoute<{ id: string }> = {
  path: "/admin/work-experience/:id/view",
  component: WorkExperienceView,
};
