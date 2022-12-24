/** @overridable */
import { XRouter, use, IComponents, QueryBodyType } from "@bluelibs/x-ui";
import { XForm } from "@bluelibs/x-ui-admin";
import { Service, Inject } from "@bluelibs/core";
import { SmileOutlined } from "@ant-design/icons";
import { Routes } from "@bundles/UIAppBundle";
import * as Ant from "antd";
import {
  Education,
  UsersCollection,
  EducationCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class EducationEditForm extends XForm {
  @Inject(() => EducationCollection)
  collection: EducationCollection;

  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "degreeTitle",
        label: t("management.education.fields.degreeTitle"),
        name: ["degreeTitle"],
        required: true,
        component: Ant.Input,
      },

      {
        id: "institute",
        label: t("management.education.fields.institute"),
        name: ["institute"],
        required: true,
        component: Ant.Input,
      },

      {
        id: "startDate",
        label: t("management.education.fields.startDate"),
        name: ["startDate"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.DatePicker required={false} />
          </Ant.Form.Item>
        ),
      },

      {
        id: "endDate",
        label: t("management.education.fields.endDate"),
        name: ["endDate"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.DatePicker required={false} />
          </Ant.Form.Item>
        ),
      },
    ]);
  }

  static getRequestBody(): QueryBodyType<Education> {
    return {
      _id: 1,
      degreeTitle: 1,
      institute: 1,
      startDate: 1,
      endDate: 1,
    };
  }

  onSubmit(_id, values: Partial<Education>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .updateOne(_id, { $set: values })
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.education.edit_confirmation"),
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
