/** @overridable */
import { XRouter, use, IComponents } from "@bluelibs/x-ui";
import { SmileOutlined } from "@ant-design/icons";
import * as Ant from "antd";
import { XFormElementType, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service, Inject } from "@bluelibs/core";
import { features } from "./features";
import {
  WorkExperience,
  UsersCollection,
  WorkExperienceCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class WorkExperienceCreateForm extends XForm {
  @Inject(() => WorkExperienceCollection)
  collection: WorkExperienceCollection;

  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "companyName",
        label: t("management.work_experience.fields.companyName"),
        name: ["companyName"],
        required: true,
        component: Ant.Input,
      },

      {
        id: "jobTitle",
        label: t("management.work_experience.fields.jobTitle"),
        name: ["jobTitle"],
        required: true,
        component: Ant.Input,
      },

      {
        id: "startDate",
        label: t("management.work_experience.fields.startDate"),
        name: ["startDate"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.DatePicker required={false} />
          </Ant.Form.Item>
        ),
      },

      {
        id: "endDate",
        label: t("management.work_experience.fields.endDate"),
        name: ["endDate"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.DatePicker required={false} />
          </Ant.Form.Item>
        ),
      },

      {
        id: "workLocation",
        label: t("management.work_experience.fields.workLocation"),
        name: ["workLocation"],
        required: true,
        render: (props) => {
          const options = [
            { value: "Remote", label: "Remote" },
            { value: "On Site", label: "On Site" },
            { value: "Hybrid", label: "Hybrid" },
          ];
          return (
            <Ant.Form.Item {...props}>
              <Ant.Select
                placeholder={t(
                  "management.work_experience.fields.workLocation"
                )}
              >
                {options.map((option) => (
                  <Ant.Select.Option value={option.value} key={option.value}>
                    {t(
                      `management.work_experience.fields.workLocation_enums.${option.label.toLowerCase()}`
                    )
                      ? t(
                          `management.work_experience.fields.workLocation_enums.${option.label.toLowerCase()}`
                        )
                      : option.label}
                  </Ant.Select.Option>
                ))}
              </Ant.Select>
            </Ant.Form.Item>
          );
        },
      },

      {
        id: "jobType",
        label: t("management.work_experience.fields.jobType"),
        name: ["jobType"],
        required: true,
        render: (props) => {
          const options = [
            { value: "Full Time", label: "Full Time" },
            { value: "Part Time", label: "Part Time" },
            { value: "Contract", label: "Contract" },
            { value: "Internship", label: "Internship" },
          ];
          return (
            <Ant.Form.Item {...props}>
              <Ant.Select
                placeholder={t("management.work_experience.fields.jobType")}
              >
                {options.map((option) => (
                  <Ant.Select.Option value={option.value} key={option.value}>
                    {t(
                      `management.work_experience.fields.jobType_enums.${option.label.toLowerCase()}`
                    )
                      ? t(
                          `management.work_experience.fields.jobType_enums.${option.label.toLowerCase()}`
                        )
                      : option.label}
                  </Ant.Select.Option>
                ))}
              </Ant.Select>
            </Ant.Form.Item>
          );
        },
      },

      {
        id: "address",
        label: t("management.work_experience.fields.address"),
        name: ["address"],
        nest: [
          {
            id: "city",
            label: t("management.work_experience.fields.address.city"),
            name: ["address", "city"],
            component: Ant.Input,
          },

          {
            id: "country",
            label: t("management.work_experience.fields.address.country"),
            name: ["address", "country"],
            component: Ant.Input,
          },
        ],
      },

      {
        id: "description",
        label: t("management.work_experience.fields.description"),
        name: ["description"],
        component: Ant.Input,
      },
    ]);
  }

  onSubmit(document: Partial<WorkExperience>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .insertOne(document)
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.work_experience.create_confirmation"),
          icon: <SmileOutlined />,
        });

        if (features.view) {
          return this.router.go(Routes.WORK_EXPERIENCE_VIEW, {
            params: {
              id: _id,
            },
          });
        }
        if (features.list) {
          return this.router.go(Routes.WORK_EXPERIENCE_LIST);
        }
        if (features.edit) {
          return this.router.go(Routes.WORK_EXPERIENCE_EDIT, {
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
