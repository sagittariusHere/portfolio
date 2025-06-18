import { Button, Form, Input, Row, Col, Typography } from "antd";
import CardContainer from "../Shared/CardContainer";
import TextArea from "antd/es/input/TextArea";
import SectionTitle from "../Shared/SectionTitle";
import { SECTIONS } from "../../constants";
import { useState } from "react";
import { useToast } from "../../context/ToastContext";

const { Text } = Typography;

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
  const toast = useToast();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      const response = await fetch("https://portfolio-be-lxjp.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      setLoading(false);
      if (result.success) {
        toast(result.message, {
          type: "success",
          description: "Thank you for reaching out!",
          placement: "top",
        });
        form.resetFields();
      } else {
        toast(result.message, {
          type: "error",
          description: "Please try again.",
          placement: "top",
        });
      }
    } catch (error) {
      setLoading(false);
      toast("Unable to send", {
        type: "error",
        description: "There is something wrong. Please try again later.",
        placement: "top",
      });
    }
  };

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
            <Form
              layout="vertical"
              form={form}
              validateMessages={validateMessages}
              validateTrigger="onBlur"
              style={{ width: "100%" }}
              onFinish={onFinish}
            >
              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                    <Input placeholder="Your Name" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true, type: "email" }]}
                  >
                    <Input placeholder="Your Email" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                name="message"
                label="Message"
                rules={[{ required: true, max: 1024 }]}
              >
                <TextArea placeholder="Your Message" maxLength={1024} rows={6} />
              </Form.Item>
              <Form.Item>
                <Text style={{ fontSize: "0.8rem", color: "#888", fontStyle: "italic" }}>
                  *This can take upto 30 seconds to send. Please be patient.*
                </Text>
              </Form.Item>
              <Form.Item style={{ textAlign: "right", marginBottom: 0 }}>
                <Button type="primary" size="large" htmlType="submit" loading={loading}>
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
