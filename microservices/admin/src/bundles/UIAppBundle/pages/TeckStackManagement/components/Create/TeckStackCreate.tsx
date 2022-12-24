import { Routes } from "@bundles/UIAppBundle";
import { useUIComponents, useRouter, use, useTranslate } from "@bluelibs/x-ui";
import * as Ant from "antd";
import { TeckStackCreateForm } from "../../config/TeckStackCreateForm";
import {
  TeckStack,
  TeckStackCollection,
} from "@bundles/UIAppBundle/collections";

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const formTailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export function TeckStackCreate() {
  const UIComponents = useUIComponents();
  const t = useTranslate();
  const form = use(TeckStackCreateForm, { transient: true });
  form.build();

  return (
    <UIComponents.AdminLayout>
      <Ant.PageHeader
        title={t("management.teck_stack.create.header")}
        onBack={() => window.history.back()}
      />
      <Ant.Card>
        <Ant.Form
          {...formLayout}
          requiredMark="optional"
          onFinish={(document) => form.onSubmit(document)}
        >
          {form.render()}
          <Ant.Form.Item {...formTailLayout}>
            <Ant.Button type="primary" htmlType="submit">
              {t("generics.submit")}
            </Ant.Button>
          </Ant.Form.Item>
        </Ant.Form>
      </Ant.Card>
    </UIComponents.AdminLayout>
  );
}
