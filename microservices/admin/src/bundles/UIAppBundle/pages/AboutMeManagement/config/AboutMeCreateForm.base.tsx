/** @overridable */
import { XRouter, use, IComponents } from "@bluelibs/x-ui";
import { SmileOutlined } from "@ant-design/icons";
import * as Ant from "antd";
import { XFormElementType, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service, Inject } from "@bluelibs/core";
import { features } from "./features";
import {
  AboutMe,
  UsersCollection,
  ImagesCollection,
  AboutMeCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class AboutMeCreateForm extends XForm {
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

  onSubmit(document: Partial<AboutMe>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .insertOne(document)
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.about_me.create_confirmation"),
          icon: <SmileOutlined />,
        });

        if (features.view) {
          return this.router.go(Routes.ABOUT_ME_VIEW, {
            params: {
              id: _id,
            },
          });
        }
        if (features.list) {
          return this.router.go(Routes.ABOUT_ME_LIST);
        }
        if (features.edit) {
          return this.router.go(Routes.ABOUT_ME_EDIT, {
            params: {
              id: _id,
            },
          });
        }
      })
      .catch((err) => {
        Ant.notification.warn({
          message: t("generics.error"),
          description: t("generics.error_message"),
        });
      });
  }
}
