/** @overridable */
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use, QueryBodyType } from "@bluelibs/x-ui";
import * as Ant from "antd";
import {
  AboutMe,
  UsersCollection,
  ImagesCollection,
  AboutMeCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class AboutMeList extends XList<AboutMe> {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "createdAt",
        title: t("management.about_me.fields.createdAt"),
        key: "management.about_me.fields.createdAt",
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
        title: t("management.about_me.fields.updatedAt"),
        key: "management.about_me.fields.updatedAt",
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
        id: "fullname",
        title: t("management.about_me.fields.fullname"),
        key: "management.about_me.fields.fullname",
        dataIndex: ["fullname"],
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
        id: "email",
        title: t("management.about_me.fields.email"),
        key: "management.about_me.fields.email",
        dataIndex: ["email"],
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
        id: "phone",
        title: t("management.about_me.fields.phone"),
        key: "management.about_me.fields.phone",
        dataIndex: ["phone"],
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
        id: "address.city",
        title: t("management.about_me.fields.address.city"),
        key: "management.about_me.fields.address.city",
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
        title: t("management.about_me.fields.address.country"),
        key: "management.about_me.fields.address.country",
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
        id: "socialLinks.facebook",
        title: t("management.about_me.fields.socialLinks.facebook"),
        key: "management.about_me.fields.socialLinks.facebook",
        dataIndex: ["socialLinks", "facebook"],
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
        id: "socialLinks.twitter",
        title: t("management.about_me.fields.socialLinks.twitter"),
        key: "management.about_me.fields.socialLinks.twitter",
        dataIndex: ["socialLinks", "twitter"],
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
        id: "socialLinks.github",
        title: t("management.about_me.fields.socialLinks.github"),
        key: "management.about_me.fields.socialLinks.github",
        dataIndex: ["socialLinks", "github"],
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
        id: "socialLinks.linkedin",
        title: t("management.about_me.fields.socialLinks.linkedin"),
        key: "management.about_me.fields.socialLinks.linkedin",
        dataIndex: ["socialLinks", "linkedin"],
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
        id: "socialLinks.meduim",
        title: t("management.about_me.fields.socialLinks.meduim"),
        key: "management.about_me.fields.socialLinks.meduim",
        dataIndex: ["socialLinks", "meduim"],
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
        title: t("management.about_me.fields.description"),
        key: "management.about_me.fields.description",
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
        title: t("management.about_me.fields.createdBy"),
        key: "management.about_me.fields.createdBy",
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
        title: t("management.about_me.fields.updatedBy"),
        key: "management.about_me.fields.updatedBy",
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
        title: t("management.about_me.fields.image"),
        key: "management.about_me.fields.image",
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
