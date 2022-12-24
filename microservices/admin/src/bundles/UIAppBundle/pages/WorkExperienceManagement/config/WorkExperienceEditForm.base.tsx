/** @overridable */
import { XRouter, use, IComponents, QueryBodyType } from "@bluelibs/x-ui";
import { XForm } from "@bluelibs/x-ui-admin";
import { Service, Inject } from "@bluelibs/core";
import { SmileOutlined } from "@ant-design/icons";
import { Routes } from "@bundles/UIAppBundle";
import * as Ant from "antd";
import {
  WorkExperience,
  UsersCollection,
  WorkExperienceCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class WorkExperienceEditForm extends XForm {
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

  static getRequestBody(): QueryBodyType<WorkExperience> {
    return {
      _id: 1,
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
    };
  }

  onSubmit(_id, values: Partial<WorkExperience>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .updateOne(_id, { $set: values })
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.work_experience.edit_confirmation"),
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
