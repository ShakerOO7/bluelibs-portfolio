/** @overridable */
import { WorkExperience } from "@root/api.types";
import { Service } from "@bluelibs/core";
import { QueryBodyType, XRouter, IComponents } from "@bluelibs/x-ui";
import { XViewElementType, XViewer } from "@bluelibs/x-ui-admin";
import * as Ant from "antd";
import { Routes } from "@bundles/UIAppBundle";

@Service({ transient: true })
export class WorkExperienceViewer extends XViewer {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "_id",
        label: t("management.work_experience.fields._id"),
        dataIndex: ["_id"],
        render: (value) => {
          const props = {
            type: "objectId",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "createdAt",
        label: t("management.work_experience.fields.createdAt"),
        dataIndex: ["createdAt"],
        render: (value) => {
          const props = {
            type: "date",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "updatedAt",
        label: t("management.work_experience.fields.updatedAt"),
        dataIndex: ["updatedAt"],
        render: (value) => {
          const props = {
            type: "date",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "companyName",
        label: t("management.work_experience.fields.companyName"),
        dataIndex: ["companyName"],
        render: (value) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "jobTitle",
        label: t("management.work_experience.fields.jobTitle"),
        dataIndex: ["jobTitle"],
        render: (value) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "startDate",
        label: t("management.work_experience.fields.startDate"),
        dataIndex: ["startDate"],
        render: (value) => {
          const props = {
            type: "date",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "endDate",
        label: t("management.work_experience.fields.endDate"),
        dataIndex: ["endDate"],
        render: (value) => {
          const props = {
            type: "date",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "workLocation",
        label: t("management.work_experience.fields.workLocation"),
        dataIndex: ["workLocation"],
        render: (value) => {
          const props = {
            type: "enum",
            value,
            labelify: true,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "jobType",
        label: t("management.work_experience.fields.jobType"),
        dataIndex: ["jobType"],
        render: (value) => {
          const props = {
            type: "enum",
            value,
            labelify: true,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "address.city",
        label: t("management.work_experience.fields.address.city"),
        dataIndex: ["address", "city"],
        render: (value) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "address.country",
        label: t("management.work_experience.fields.address.country"),
        dataIndex: ["address", "country"],
        render: (value) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "description",
        label: t("management.work_experience.fields.description"),
        dataIndex: ["description"],
        render: (value) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "createdBy",
        label: t("management.work_experience.fields.createdBy"),
        dataIndex: ["createdBy"],
        render: (value) => {
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
        label: t("management.work_experience.fields.updatedBy"),
        dataIndex: ["updatedBy"],
        render: (value) => {
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
    ]);
  }

  static getRequestBody(): QueryBodyType<WorkExperience> {
    return {
      _id: 1,
      createdAt: 1,
      updatedAt: 1,
      companyName: 1,
      jobTitle: 1,
      startDate: 1,
      endDate: 1,
      workLocation: 1,
      jobType: 1,
      address: {
        city: 1,
        country: 1,
      },
      description: 1,
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
    };
  }
}
