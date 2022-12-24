/** @overridable */
import { notification } from "antd";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use } from "@bluelibs/x-ui";
import * as Ant from "antd";
import {
  WorkExperience,
  UsersCollection,
  WorkExperienceCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class WorkExperienceListFiltersForm extends XForm {
  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "createdAt",
        label: t("management.work_experience.fields.createdAt"),
        name: ["createdAt"],
        tooltip: t("management.work_experience.fields.createdAt_description"),
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.DatePicker.RangePicker />
          </Ant.Form.Item>
        ),
      },

      {
        id: "updatedAt",
        label: t("management.work_experience.fields.updatedAt"),
        name: ["updatedAt"],
        tooltip: t("management.work_experience.fields.updatedAt_description"),
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.DatePicker.RangePicker />
          </Ant.Form.Item>
        ),
      },

      {
        id: "companyName",
        label: t("management.work_experience.fields.companyName"),
        name: ["companyName"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Input />
          </Ant.Form.Item>
        ),
      },

      {
        id: "jobTitle",
        label: t("management.work_experience.fields.jobTitle"),
        name: ["jobTitle"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Input />
          </Ant.Form.Item>
        ),
      },

      {
        id: "startDate",
        label: t("management.work_experience.fields.startDate"),
        name: ["startDate"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.DatePicker.RangePicker />
          </Ant.Form.Item>
        ),
      },

      {
        id: "endDate",
        label: t("management.work_experience.fields.endDate"),
        name: ["endDate"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.DatePicker.RangePicker />
          </Ant.Form.Item>
        ),
      },

      {
        id: "workLocation",
        label: t("management.work_experience.fields.workLocation"),
        name: ["workLocation"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Select
              mode="multiple"
              placeholder={t("management.work_experience.fields.workLocation")}
            >
              <Ant.Select.Option value="Remote" key="Remote">
                Remote
              </Ant.Select.Option>
              <Ant.Select.Option value="On Site" key="On Site">
                On Site
              </Ant.Select.Option>
              <Ant.Select.Option value="Hybrid" key="Hybrid">
                Hybrid
              </Ant.Select.Option>
            </Ant.Select>
          </Ant.Form.Item>
        ),
      },

      {
        id: "jobType",
        label: t("management.work_experience.fields.jobType"),
        name: ["jobType"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Select
              mode="multiple"
              placeholder={t("management.work_experience.fields.jobType")}
            >
              <Ant.Select.Option value="Full Time" key="Full Time">
                Full Time
              </Ant.Select.Option>
              <Ant.Select.Option value="Part Time" key="Part Time">
                Part Time
              </Ant.Select.Option>
              <Ant.Select.Option value="Contract" key="Contract">
                Contract
              </Ant.Select.Option>
              <Ant.Select.Option value="Internship" key="Internship">
                Internship
              </Ant.Select.Option>
            </Ant.Select>
          </Ant.Form.Item>
        ),
      },

      {
        id: "address",
        label: t("management.work_experience.fields.address"),
        name: ["address"],
        columns: true,
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
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Input />
          </Ant.Form.Item>
        ),
      },

      {
        id: "createdById",
        label: t("management.work_experience.fields.createdBy"),
        name: ["createdById"],
        tooltip: t("management.work_experience.fields.createdBy_description"),
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
        label: t("management.work_experience.fields.updatedBy"),
        name: ["updatedById"],
        tooltip: t("management.work_experience.fields.updatedBy_description"),
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
    ]);
  }
}
