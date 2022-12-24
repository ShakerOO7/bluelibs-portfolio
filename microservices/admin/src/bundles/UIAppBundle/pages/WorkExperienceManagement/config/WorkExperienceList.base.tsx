/** @overridable */
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use, QueryBodyType } from "@bluelibs/x-ui";
import * as Ant from "antd";
import {
  WorkExperience,
  UsersCollection,
  WorkExperienceCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class WorkExperienceList extends XList<WorkExperience> {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "createdAt",
        title: t("management.work_experience.fields.createdAt"),
        key: "management.work_experience.fields.createdAt",
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
        title: t("management.work_experience.fields.updatedAt"),
        key: "management.work_experience.fields.updatedAt",
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
        id: "companyName",
        title: t("management.work_experience.fields.companyName"),
        key: "management.work_experience.fields.companyName",
        dataIndex: ["companyName"],
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
        id: "jobTitle",
        title: t("management.work_experience.fields.jobTitle"),
        key: "management.work_experience.fields.jobTitle",
        dataIndex: ["jobTitle"],
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
        id: "startDate",
        title: t("management.work_experience.fields.startDate"),
        key: "management.work_experience.fields.startDate",
        dataIndex: ["startDate"],
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
        id: "endDate",
        title: t("management.work_experience.fields.endDate"),
        key: "management.work_experience.fields.endDate",
        dataIndex: ["endDate"],
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
        id: "workLocation",
        title: t("management.work_experience.fields.workLocation"),
        key: "management.work_experience.fields.workLocation",
        dataIndex: ["workLocation"],
        sorter: true,
        render: (value, model) => {
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
        title: t("management.work_experience.fields.jobType"),
        key: "management.work_experience.fields.jobType",
        dataIndex: ["jobType"],
        sorter: true,
        render: (value, model) => {
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
        title: t("management.work_experience.fields.address.city"),
        key: "management.work_experience.fields.address.city",
        dataIndex: ["address", "city"],
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
        id: "address.country",
        title: t("management.work_experience.fields.address.country"),
        key: "management.work_experience.fields.address.country",
        dataIndex: ["address", "country"],
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
        title: t("management.work_experience.fields.description"),
        key: "management.work_experience.fields.description",
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
        id: "createdBy",
        title: t("management.work_experience.fields.createdBy"),
        key: "management.work_experience.fields.createdBy",
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
        title: t("management.work_experience.fields.updatedBy"),
        key: "management.work_experience.fields.updatedBy",
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
    ]);
  }

  static getSortMap() {
    return {
      createdBy: "createdBy.fullName",
      updatedBy: "updatedBy.fullName",
    };
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
