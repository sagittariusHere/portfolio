import { Button, Form, Input, Row, Col, Alert } from "antd";
import CardContainer from "../Shared/CardContainer";
import TextArea from "antd/es/input/TextArea";
import SectionTitle from "../Shared/SectionTitle";
import { SECTIONS } from "../../constants";
import { useToast } from "../../hooks/useToast";

const validateMessages = {
  required: "Please enter ${label}",
  types: {
    email: "${label} is not a valid email",
  },
  number: {
    range: "${label} max characters ${max}",
  },
};

export default function Contact() {
  const { toast, ToastProvider } = useToast();
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form values:", values);
    toast("Under construction", {
      type: "warning",
      description:
        "The backend isn't ready for it. You can still reach me on my email. sagittarius.here@gmail.com",
      placement: "top",
    });
  };

  return (
    <ToastProvider>
      <div className="container">
        <SectionTitle
          id={SECTIONS.CONTACT}
          title="Contact Me"
          subtitle="Drop me a line, and let's make some magic happen!"
        />
        <Row justify="center" style={{ width: "100%" }}>
          <Col xs={22} sm={20} md={16}>
            <CardContainer style={{ padding: "0" }}>
              <Alert
                message="Under construction"
                description={
                  <>
                    The backend isn't ready for it. You can still reach me on my email.
                    <br />
                    sagittarius.here@gmail.com
                  </>
                }
                type="warning"
                showIcon
                style={{ width: "100%" }}
              />
              <Form
                layout="vertical"
                form={form}
                validateMessages={validateMessages}
                validateTrigger="onBlur"
                style={{ width: "100%" }}
                onFinish={onFinish}
              >
                <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                  <Input placeholder="Your Name" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[{ required: true, type: "email" }]}
                >
                  <Input placeholder="Your Email" />
                </Form.Item>
                <Form.Item
                  name="message"
                  label="Message"
                  rules={[{ required: true, max: 1024 }]}
                >
                  <TextArea placeholder="Your Message" maxLength={1024} rows={6} />
                </Form.Item>
                <Form.Item style={{ textAlign: "right", marginBottom: 0 }}>
                  <Button type="primary" size="large" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </CardContainer>
          </Col>
        </Row>
      </div>
    </ToastProvider>
  );
}
