/** @overridable */
import { notification } from "antd";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use } from "@bluelibs/x-ui";
import * as Ant from "antd";
import {
  AboutMe,
  UsersCollection,
  ImagesCollection,
  AboutMeCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class AboutMeListFiltersForm extends XForm {
  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "createdAt",
        label: t("management.about_me.fields.createdAt"),
        name: ["createdAt"],
        tooltip: t("management.about_me.fields.createdAt_description"),
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.DatePicker.RangePicker />
          </Ant.Form.Item>
        ),
      },

      {
        id: "updatedAt",
        label: t("management.about_me.fields.updatedAt"),
        name: ["updatedAt"],
        tooltip: t("management.about_me.fields.updatedAt_description"),
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.DatePicker.RangePicker />
          </Ant.Form.Item>
        ),
      },

      {
        id: "fullname",
        label: t("management.about_me.fields.fullname"),
        name: ["fullname"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Input />
          </Ant.Form.Item>
        ),
      },

      {
        id: "email",
        label: t("management.about_me.fields.email"),
        name: ["email"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Input />
          </Ant.Form.Item>
        ),
      },

      {
        id: "phone",
        label: t("management.about_me.fields.phone"),
        name: ["phone"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Input />
          </Ant.Form.Item>
        ),
      },

      {
        id: "address",
        label: t("management.about_me.fields.address"),
        name: ["address"],
        columns: true,
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
        columns: true,
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
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Input />
          </Ant.Form.Item>
        ),
      },

      {
        id: "createdById",
        label: t("management.about_me.fields.createdBy"),
        name: ["createdById"],
        tooltip: t("management.about_me.fields.createdBy_description"),
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={UsersCollection}
              field="fullName"
              placeholder="Please select an option"
              mode="multiple"
            />
          </Ant.Form.Item>
        ),
      },

      {
        id: "updatedById",
        label: t("management.about_me.fields.updatedBy"),
        name: ["updatedById"],
        tooltip: t("management.about_me.fields.updatedBy_description"),
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={UsersCollection}
              field="fullName"
              placeholder="Please select an option"
              mode="multiple"
            />
          </Ant.Form.Item>
        ),
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
              placeholder="Please select an option"
              mode="multiple"
            />
          </Ant.Form.Item>
        ),
      },
    ]);
  }
}
