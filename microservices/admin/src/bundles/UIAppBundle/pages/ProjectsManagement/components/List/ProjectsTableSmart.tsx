import React, { Fragment } from "react";
import { Project, ProjectsCollection } from "@bundles/UIAppBundle/collections";
import { Routes } from "@bundles/UIAppBundle";
import { ColumnsType, ColumnType } from "antd/lib/table";
import {
  DeleteOutlined,
  DownOutlined,
  EditOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { AntTableSmart, Consumer } from "@bluelibs/x-ui-admin";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Service } from "@bluelibs/core";
import * as Ant from "antd";
import { features } from "../../config/features";
import { ProjectList } from "../../config/ProjectList";

export class ProjectsAntTableSmart extends AntTableSmart<Project> {
  collectionClass = ProjectsCollection;

  getBody(): QueryBodyType<Project> {
    return ProjectList.getRequestBody();
  }

  getColumns(): ColumnsType<Project> {
    const list = this.container.get(ProjectList);
    list.build();

    return [...list.rest(), this.getActionsColumn()];
  }

  getActionsColumn(): ColumnType<Project> {
    return {
      title: this.i18n.t("generics.list_actions"),
      key: "actions",
      fixed: "right",
      width: 180,
      render: (_, model) => {
        return this.generateActions(model, {
          label: this.i18n.t("generics.list_actions"),
          icon: <DownOutlined />,
          items: this.getActionItems(),
        });
      },
    };
  }

  getSortMap() {
    return ProjectList.getSortMap();
  }

  getActionItems() {
    const actions = [];

    if (features.view) {
      actions.push({
        label: this.i18n.t("generics.view"),
        icon: <EyeOutlined />,
        action: (model) => {
          this.router.go(Routes.PROJECTS_VIEW, {
            params: { id: model._id.toString() },
          });
        },
      });
    }

    if (features.edit) {
      actions.push({
        label: this.i18n.t("generics.edit"),
        icon: <EditOutlined />,
        action: (model) => {
          this.router.go(Routes.PROJECTS_EDIT, {
            params: { id: model._id.toString() },
          });
        },
      });
    }

    if (features.delete) {
      actions.push({
        label: this.i18n.t("generics.delete"),
        icon: <DeleteOutlined />,
        confirm: this.i18n.t("generics.ask_confirmation"),
        action: (model) => {
          this.collection.deleteOne(model._id).then(() => {
            this.load();
          });
        },
      });
    }

    return actions;
  }
}
