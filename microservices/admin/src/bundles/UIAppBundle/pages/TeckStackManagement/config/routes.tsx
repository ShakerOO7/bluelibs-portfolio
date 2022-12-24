/** @overridable */
import { IRoute } from "@bluelibs/x-ui";
import * as React from "react";
import { TeckStackList } from "../components/List/TeckStackList";
import { TeckStackCreate } from "../components/Create/TeckStackCreate";
import { TeckStackEdit } from "../components/Edit/TeckStackEdit";
import { TeckStackView } from "../components/View/TeckStackView";

import { SettingFilled } from "@ant-design/icons";

export const TECK_STACK_LIST: IRoute = {
  path: "/admin/teck-stack",
  component: TeckStackList,
  menu: {
    key: "TECK_STACK_LIST",
    label: "management.teck_stack.menu.title",
    icon: SettingFilled,
  },
};

export const TECK_STACK_CREATE: IRoute = {
  path: "/admin/teck-stack/create",
  component: TeckStackCreate,
};

export const TECK_STACK_EDIT: IRoute<{ id: string }> = {
  path: "/admin/teck-stack/:id/edit",
  component: TeckStackEdit,
};

export const TECK_STACK_VIEW: IRoute<{ id: string }> = {
  path: "/admin/teck-stack/:id/view",
  component: TeckStackView,
};
