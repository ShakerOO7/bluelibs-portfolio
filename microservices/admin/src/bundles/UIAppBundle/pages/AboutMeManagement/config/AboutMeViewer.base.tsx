/** @overridable */
import { AboutMe } from "@root/api.types";
import { Service } from "@bluelibs/core";
import { QueryBodyType, XRouter, IComponents } from "@bluelibs/x-ui";
import { XViewElementType, XViewer } from "@bluelibs/x-ui-admin";
import * as Ant from "antd";
import { Routes } from "@bundles/UIAppBundle";

@Service({ transient: true })
export class AboutMeViewer extends XViewer {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "_id",
        label: t("management.about_me.fields._id"),
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
        label: t("management.about_me.fields.createdAt"),
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
        label: t("management.about_me.fields.updatedAt"),
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
        id: "fullname",
        label: t("management.about_me.fields.fullname"),
        dataIndex: ["fullname"],
        render: (value) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "email",
        label: t("management.about_me.fields.email"),
        dataIndex: ["email"],
        render: (value) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "phone",
        label: t("management.about_me.fields.phone"),
        dataIndex: ["phone"],
        render: (value) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "address.city",
        label: t("management.about_me.fields.address.city"),
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
        label: t("management.about_me.fields.address.country"),
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
        id: "socialLinks.facebook",
        label: t("management.about_me.fields.socialLinks.facebook"),
        dataIndex: ["socialLinks", "facebook"],
        render: (value) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "socialLinks.twitter",
        label: t("management.about_me.fields.socialLinks.twitter"),
        dataIndex: ["socialLinks", "twitter"],
        render: (value) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "socialLinks.github",
        label: t("management.about_me.fields.socialLinks.github"),
        dataIndex: ["socialLinks", "github"],
        render: (value) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "socialLinks.linkedin",
        label: t("management.about_me.fields.socialLinks.linkedin"),
        dataIndex: ["socialLinks", "linkedin"],
        render: (value) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "socialLinks.meduim",
        label: t("management.about_me.fields.socialLinks.meduim"),
        dataIndex: ["socialLinks", "meduim"],
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
        label: t("management.about_me.fields.description"),
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
        label: t("management.about_me.fields.createdBy"),
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
        label: t("management.about_me.fields.updatedBy"),
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
      {
        id: "image",
        label: t("management.about_me.fields.image"),
        dataIndex: ["image"],
        render: (value) => {
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

  static getRequestBody(): QueryBodyType<AboutMe> {
    return {
      _id: 1,
      createdAt: 1,
      updatedAt: 1,
      fullname: 1,
      email: 1,
      phone: 1,
      address: {
        city: 1,
        country: 1,
      },
      socialLinks: {
        facebook: 1,
        twitter: 1,
        github: 1,
        linkedin: 1,
        meduim: 1,
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
      image: {
        _id: 1,
        downloadUrl: 1,
      },
      imageId: 1,
    };
  }
}
