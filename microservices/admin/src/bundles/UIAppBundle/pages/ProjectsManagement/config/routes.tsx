/** @overridable */
import { IRoute } from "@bluelibs/x-ui";
import * as React from "react";
import { ProjectsList } from "../components/List/ProjectsList";
import { ProjectsCreate } from "../components/Create/ProjectsCreate";
import { ProjectsEdit } from "../components/Edit/ProjectsEdit";
import { ProjectsView } from "../components/View/ProjectsView";

import { SettingFilled } from "@ant-design/icons";

export const PROJECTS_LIST: IRoute = {
  path: "/admin/projects",
  component: ProjectsList,
  menu: {
    key: "PROJECTS_LIST",
    label: "management.projects.menu.title",
    icon: SettingFilled,
  },
};

export const PROJECTS_CREATE: IRoute = {
  path: "/admin/projects/create",
  component: ProjectsCreate,
};

export const PROJECTS_EDIT: IRoute<{ id: string }> = {
  path: "/admin/projects/:id/edit",
  component: ProjectsEdit,
};

export const PROJECTS_VIEW: IRoute<{ id: string }> = {
  path: "/admin/projects/:id/view",
  component: ProjectsView,
};
