/** @overridable */
import { XRouter, use, IComponents, QueryBodyType } from "@bluelibs/x-ui";
import { XForm } from "@bluelibs/x-ui-admin";
import { Service, Inject } from "@bluelibs/core";
import { SmileOutlined } from "@ant-design/icons";
import { Routes } from "@bundles/UIAppBundle";
import * as Ant from "antd";
import {
  TeckStack,
  UsersCollection,
  ImagesCollection,
  TeckStackCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class TeckStackEditForm extends XForm {
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

  static getRequestBody(): QueryBodyType<TeckStack> {
    return {
      _id: 1,
      name: 1,
      order: 1,
      image: {
        _id: 1,
        downloadUrl: 1,
      },
      imageId: 1,
    };
  }

  onSubmit(_id, values: Partial<TeckStack>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .updateOne(_id, { $set: values })
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.teck_stack.edit_confirmation"),
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
