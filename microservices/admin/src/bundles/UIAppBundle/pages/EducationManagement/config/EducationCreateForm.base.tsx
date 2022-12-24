/** @overridable */
import { XRouter, use, IComponents } from "@bluelibs/x-ui";
import { SmileOutlined } from "@ant-design/icons";
import * as Ant from "antd";
import { XFormElementType, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service, Inject } from "@bluelibs/core";
import { features } from "./features";
import {
  Education,
  UsersCollection,
  EducationCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class EducationCreateForm extends XForm {
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

  onSubmit(document: Partial<Education>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .insertOne(document)
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.education.create_confirmation"),
          icon: <SmileOutlined />,
        });

        if (features.view) {
          return this.router.go(Routes.EDUCATION_VIEW, {
            params: {
              id: _id,
            },
          });
        }
        if (features.list) {
          return this.router.go(Routes.EDUCATION_LIST);
        }
        if (features.edit) {
          return this.router.go(Routes.EDUCATION_EDIT, {
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
