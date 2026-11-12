import { Button, Form, Input } from "antd";
import { useState } from "react";
import { useToast } from "../../context/ToastContext";
import { LINKS } from "../../content";

type Message = { name: string; email: string; message: string };

export default function Contact() {
  const toast = useToast();
  const [form] = Form.useForm<Message>();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: Message) => {
    setLoading(true);
    try {
      const response = await fetch("https://portfolio-be-lxjp.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (result.success) {
        toast(result.message, { type: "success", description: "Thanks for reaching out!", placement: "top" });
        form.resetFields();
      } else {
        toast(result.message, { type: "error", description: "Please try again.", placement: "top" });
      }
    } catch {
      toast("Unable to send", {
        type: "error",
        description: "Something went wrong. Please try again later.",
        placement: "top",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="container contact">
      <div>
        <h2 className="display">Got something worth building?</h2>
        <p className="muted">
          I'm open to interesting roles and projects. Messages land straight in my inbox, or find me on{" "}
          <a href={LINKS.linkedin}>LinkedIn</a> and <a href={LINKS.github}>GitHub</a>.
        </p>
      </div>

      <Form form={form} layout="vertical" requiredMark={false} validateTrigger="onBlur" onFinish={onFinish}>
        <Form.Item name="name" rules={[{ required: true, message: "Please enter your name" }]}>
          <Input variant="underlined" placeholder="Name" />
        </Form.Item>
        <Form.Item name="email" rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}>
          <Input variant="underlined" placeholder="Email" />
        </Form.Item>
        <Form.Item name="message" rules={[{ required: true, message: "Please write a message" }]}>
          <Input.TextArea variant="underlined" placeholder="Message" maxLength={1024} autoSize={{ minRows: 3 }} />
        </Form.Item>
        <Button type="primary" size="large" htmlType="submit" loading={loading}>
          Send message
        </Button>
        <p className="mono muted">The first message can take ~30s while the server wakes up.</p>
      </Form>
    </section>
  );
}
