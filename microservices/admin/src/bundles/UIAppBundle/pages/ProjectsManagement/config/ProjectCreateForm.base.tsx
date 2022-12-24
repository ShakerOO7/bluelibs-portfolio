/** @overridable */
import { XRouter, use, IComponents } from "@bluelibs/x-ui";
import { SmileOutlined } from "@ant-design/icons";
import * as Ant from "antd";
import { XFormElementType, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service, Inject } from "@bluelibs/core";
import { features } from "./features";
import {
  Project,
  UsersCollection,
  ImagesCollection,
  ProjectsCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class ProjectCreateForm extends XForm {
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

  onSubmit(document: Partial<Project>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .insertOne(document)
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.projects.create_confirmation"),
          icon: <SmileOutlined />,
        });

        if (features.view) {
          return this.router.go(Routes.PROJECTS_VIEW, {
            params: {
              id: _id,
            },
          });
        }
        if (features.list) {
          return this.router.go(Routes.PROJECTS_LIST);
        }
        if (features.edit) {
          return this.router.go(Routes.PROJECTS_EDIT, {
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
