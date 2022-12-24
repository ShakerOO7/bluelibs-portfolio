/** @overridable */
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use, QueryBodyType } from "@bluelibs/x-ui";
import * as Ant from "antd";
import {
  Project,
  UsersCollection,
  ImagesCollection,
  ProjectsCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class ProjectList extends XList<Project> {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "createdAt",
        title: t("management.projects.fields.createdAt"),
        key: "management.projects.fields.createdAt",
        dataIndex: ["createdAt"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "date",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "updatedAt",
        title: t("management.projects.fields.updatedAt"),
        key: "management.projects.fields.updatedAt",
        dataIndex: ["updatedAt"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "date",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "name",
        title: t("management.projects.fields.name"),
        key: "management.projects.fields.name",
        dataIndex: ["name"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "link",
        title: t("management.projects.fields.link"),
        key: "management.projects.fields.link",
        dataIndex: ["link"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "codeUrl",
        title: t("management.projects.fields.codeUrl"),
        key: "management.projects.fields.codeUrl",
        dataIndex: ["codeUrl"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "description",
        title: t("management.projects.fields.description"),
        key: "management.projects.fields.description",
        dataIndex: ["description"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "techStack",
        title: t("management.projects.fields.techStack"),
        key: "management.projects.fields.techStack",
        dataIndex: ["techStack"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "createdBy",
        title: t("management.projects.fields.createdBy"),
        key: "management.projects.fields.createdBy",
        dataIndex: ["createdBy"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "relation",
            value,
            relation: {
              path: router.path(Routes.USERS_VIEW, {
                params: {
                  id: value?._id,
                },
              }),
              dataIndex: "fullName",
            },
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "updatedBy",
        title: t("management.projects.fields.updatedBy"),
        key: "management.projects.fields.updatedBy",
        dataIndex: ["updatedBy"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "relation",
            value,
            relation: {
              path: router.path(Routes.USERS_VIEW, {
                params: {
                  id: value?._id,
                },
              }),
              dataIndex: "fullName",
            },
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "image",
        title: t("management.projects.fields.image"),
        key: "management.projects.fields.image",
        dataIndex: ["image"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "relation",
            value,
            relation: {
              path: router.path(Routes.IMAGES_VIEW, {
                params: {
                  id: value?._id,
                },
              }),
              dataIndex: "downloadUrl",
            },
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
    ]);
  }

  static getSortMap() {
    return {
      createdBy: "createdBy.fullName",
      updatedBy: "updatedBy.fullName",
      image: "image.downloadUrl",
    };
  }

  static getRequestBody(): QueryBodyType<Project> {
    return {
      _id: 1,
      createdAt: 1,
      updatedAt: 1,
      name: 1,
      link: 1,
      codeUrl: 1,
      description: 1,
      techStack: 1,
      createdBy: {
        _id: 1,
        fullName: 1,
      },
      createdById: 1,
      updatedBy: {
        _id: 1,
        fullName: 1,
      },
      updatedById: 1,
      image: {
        _id: 1,
        downloadUrl: 1,
      },
      imageId: 1,
    };
  }
}
