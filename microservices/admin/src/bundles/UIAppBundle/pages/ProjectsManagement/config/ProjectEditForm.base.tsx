/** @overridable */
import { XRouter, use, IComponents, QueryBodyType } from "@bluelibs/x-ui";
import { XForm } from "@bluelibs/x-ui-admin";
import { Service, Inject } from "@bluelibs/core";
import { SmileOutlined } from "@ant-design/icons";
import { Routes } from "@bundles/UIAppBundle";
import * as Ant from "antd";
import {
  Project,
  UsersCollection,
  ImagesCollection,
  ProjectsCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class ProjectEditForm extends XForm {
  @Inject(() => ProjectsCollection)
  collection: ProjectsCollection;

  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "name",
        label: t("management.projects.fields.name"),
        name: ["name"],
        required: true,
        component: Ant.Input,
      },

      {
        id: "link",
        label: t("management.projects.fields.link"),
        name: ["link"],
        component: Ant.Input,
      },

      {
        id: "codeUrl",
        label: t("management.projects.fields.codeUrl"),
        name: ["codeUrl"],
        component: Ant.Input,
      },

      {
        id: "description",
        label: t("management.projects.fields.description"),
        name: ["description"],
        component: Ant.Input,
      },

      {
        id: "techStack",
        label: t("management.projects.fields.techStack"),
        name: ["techStack"],
        component: Ant.Input,
      },

      {
        id: "imageId",
        label: t("management.projects.fields.image"),
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

  static getRequestBody(): QueryBodyType<Project> {
    return {
      _id: 1,
      name: 1,
      link: 1,
      codeUrl: 1,
      description: 1,
      techStack: 1,
      image: {
        _id: 1,
        downloadUrl: 1,
      },
      imageId: 1,
    };
  }

  onSubmit(_id, values: Partial<Project>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .updateOne(_id, { $set: values })
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.projects.edit_confirmation"),
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
