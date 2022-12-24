/** @overridable */
import { XRouter, use, IComponents, QueryBodyType } from "@bluelibs/x-ui";
import { XForm } from "@bluelibs/x-ui-admin";
import { Service, Inject } from "@bluelibs/core";
import { SmileOutlined } from "@ant-design/icons";
import { Routes } from "@bundles/UIAppBundle";
import * as Ant from "antd";
import {
  AboutMe,
  UsersCollection,
  ImagesCollection,
  AboutMeCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class AboutMeEditForm extends XForm {
  @Inject(() => AboutMeCollection)
  collection: AboutMeCollection;

  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "fullname",
        label: t("management.about_me.fields.fullname"),
        name: ["fullname"],
        required: true,
        component: Ant.Input,
      },

      {
        id: "email",
        label: t("management.about_me.fields.email"),
        name: ["email"],
        component: Ant.Input,
      },

      {
        id: "phone",
        label: t("management.about_me.fields.phone"),
        name: ["phone"],
        component: Ant.Input,
      },

      {
        id: "address",
        label: t("management.about_me.fields.address"),
        name: ["address"],
        nest: [
          {
            id: "city",
            label: t("management.about_me.fields.address.city"),
            name: ["address", "city"],
            component: Ant.Input,
          },

          {
            id: "country",
            label: t("management.about_me.fields.address.country"),
            name: ["address", "country"],
            component: Ant.Input,
          },
        ],
      },

      {
        id: "socialLinks",
        label: t("management.about_me.fields.socialLinks"),
        name: ["socialLinks"],
        nest: [
          {
            id: "facebook",
            label: t("management.about_me.fields.socialLinks.facebook"),
            name: ["socialLinks", "facebook"],
            component: Ant.Input,
          },

          {
            id: "twitter",
            label: t("management.about_me.fields.socialLinks.twitter"),
            name: ["socialLinks", "twitter"],
            component: Ant.Input,
          },

          {
            id: "github",
            label: t("management.about_me.fields.socialLinks.github"),
            name: ["socialLinks", "github"],
            component: Ant.Input,
          },

          {
            id: "linkedin",
            label: t("management.about_me.fields.socialLinks.linkedin"),
            name: ["socialLinks", "linkedin"],
            component: Ant.Input,
          },

          {
            id: "meduim",
            label: t("management.about_me.fields.socialLinks.meduim"),
            name: ["socialLinks", "meduim"],
            component: Ant.Input,
          },
        ],
      },

      {
        id: "description",
        label: t("management.about_me.fields.description"),
        name: ["description"],
        component: Ant.Input,
      },

      {
        id: "imageId",
        label: t("management.about_me.fields.image"),
        name: ["imageId"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={ImagesCollection}
              field="downloadUrl"
              required={false}
            />
          </Ant.Form.Item>
        ),
      },
    ]);
  }

  static getRequestBody(): QueryBodyType<AboutMe> {
    return {
      _id: 1,
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
      image: {
        _id: 1,
        downloadUrl: 1,
      },
      imageId: 1,
    };
  }

  onSubmit(_id, values: Partial<AboutMe>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .updateOne(_id, { $set: values })
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.about_me.edit_confirmation"),
          icon: <SmileOutlined />,
        });
      })
      .catch((err) => {
        Ant.notification.warn({
          message: t("generics.error"),
          description: t("generics.error_message"),
        });
      });
  }
}
