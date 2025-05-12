import { Button, Form, Input, Row, Col } from "antd";
import CardContainer from "../Shared/CardContainer";
import TextArea from "antd/es/input/TextArea";
import SectionTitle from "../Shared/SectionTitle";
import { SECTIONS } from "../../constants";

export default function Contact() {
  const [form] = Form.useForm();

  return (
    <div className="container">
      <SectionTitle
        id={SECTIONS.CONTACT}
        title="Contact Me"
        subtitle="Drop me a line, and let's make some magic happen!"
      />
      <Row justify="center" style={{ width: "100%" }}>
        <Col xs={22} sm={20} md={16}>
          <CardContainer style={{ padding: "0" }}>
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
          </CardContainer>
        </Col>
      </Row>
    </div>
  );
}
