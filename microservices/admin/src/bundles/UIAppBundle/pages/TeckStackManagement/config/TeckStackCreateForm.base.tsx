/** @overridable */
import { XRouter, use, IComponents } from "@bluelibs/x-ui";
import { SmileOutlined } from "@ant-design/icons";
import * as Ant from "antd";
import { XFormElementType, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service, Inject } from "@bluelibs/core";
import { features } from "./features";
import {
  TeckStack,
  UsersCollection,
  ImagesCollection,
  TeckStackCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class TeckStackCreateForm extends XForm {
  @Inject(() => TeckStackCollection)
  collection: TeckStackCollection;

  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "name",
        label: t("management.teck_stack.fields.name"),
        name: ["name"],
        component: Ant.Input,
      },

      {
        id: "order",
        label: t("management.teck_stack.fields.order"),
        name: ["order"],
        component: Ant.InputNumber,
      },

      {
        id: "imageId",
        label: t("management.teck_stack.fields.image"),
        name: ["imageId"],
        required: true,
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={ImagesCollection}
              field="downloadUrl"
              required={true}
            />
          </Ant.Form.Item>
        ),
      },
    ]);
  }

  onSubmit(document: Partial<TeckStack>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .insertOne(document)
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.teck_stack.create_confirmation"),
          icon: <SmileOutlined />,
        });

        if (features.view) {
          return this.router.go(Routes.TECK_STACK_VIEW, {
            params: {
              id: _id,
            },
          });
        }
        if (features.list) {
          return this.router.go(Routes.TECK_STACK_LIST);
        }
        if (features.edit) {
          return this.router.go(Routes.TECK_STACK_EDIT, {
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
