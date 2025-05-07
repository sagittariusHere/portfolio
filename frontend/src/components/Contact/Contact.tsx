import { Button, Flex, Form, Input } from "antd";
import CardContainer from "../Shared/CardContainer";
import TextArea from "antd/es/input/TextArea";
import SectionTitle from "../Shared/SectionTitle";

export default function Contact() {
  const [form] = Form.useForm();

  return (
    <>
      <SectionTitle
        title="Contact Me"
        subtitle="Drop me a line, and let's make some magic happen!"
      />
      <CardContainer style={{ width: "60%", padding: "0" }}>
        <Flex style={{ width: "100%" }}>
          <Form layout="vertical" form={form} style={{ width: "100%" }}>
            <Form.Item label="Name">
              <Input placeholder="Your Name" />
            </Form.Item>
            <Form.Item label="Email">
              <Input placeholder="Your Email" />
            </Form.Item>
            <Form.Item label="Message">
              <TextArea placeholder="Your Message" maxLength={1024} rows={6} />
            </Form.Item>
            <Form.Item style={{ textAlign: "right", marginBottom: 0 }}>
              <Button type="primary" size="large">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Flex>
      </CardContainer>
    </>
  );
}
