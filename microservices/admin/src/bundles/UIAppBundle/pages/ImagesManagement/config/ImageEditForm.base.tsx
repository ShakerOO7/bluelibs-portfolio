/** @overridable */
import { XRouter, use, IComponents, QueryBodyType } from "@bluelibs/x-ui";
import { XForm } from "@bluelibs/x-ui-admin";
import { Service, Inject } from "@bluelibs/core";
import { SmileOutlined } from "@ant-design/icons";
import { Routes } from "@bundles/UIAppBundle";
import * as Ant from "antd";
import {
  Image,
  UsersCollection,
  ImagesCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class ImageEditForm extends XForm {
  @Inject(() => ImagesCollection)
  collection: ImagesCollection;

  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "downloadUrl",
        label: t("management.images.fields.downloadUrl"),
        name: ["downloadUrl"],
        required: true,
        component: Ant.Input,
      },
    ]);
  }

  static getRequestBody(): QueryBodyType<Image> {
    return {
      _id: 1,
      downloadUrl: 1,
    };
  }

  onSubmit(_id, values: Partial<Image>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .updateOne(_id, { $set: values })
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.images.edit_confirmation"),
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
