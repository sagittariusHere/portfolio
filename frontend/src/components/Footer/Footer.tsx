import { Button, Divider, Flex, theme, Typography } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { openLink } from "../../utils/helper";

const { Text, Title } = Typography;

export default function Footer() {
  const { token } = theme.useToken();

  const onEmailMe = (email: string) => {
    console.log("Email me clicked", `mailto:${email}`);
    window.location.href = `mailto:${email}`;
  };

  return (
    <Flex
      style={{
        width: "100%",
        backgroundColor: token.colorPrimary,
        paddingTop: "200px",
        marginTop: "-200px",
      }}
      justify="center"
      align="center"
      vertical
    >
      <Flex
        style={{
          width: "70%",
          margin: "30px auto",
        }}
        gap="middle"
        justify="space-between"
        vertical
      >
        <Flex justify="space-between">
          <Flex vertical gap="small">
            <Title level={4} style={{ color: token.colorTextSecondary }}>
              Abdullah Khalid
            </Title>
            <Text
              style={{
                color: token.colorTextSecondary,
                maxWidth: "600px",
                fontSize: "14px",
              }}
            >
              I make things that live on the web and in games. I am a software
              engineer with a passion for creating beautiful and functional
              applications.
            </Text>
          </Flex>
          <Flex vertical gap="small">
            <Title level={4} style={{ color: token.colorTextSecondary }}>
              Social
            </Title>
            <Flex gap="small">
              <Button
                style={{ borderRadius: "50%", width: "30px", padding: 0 }}
                onClick={() => openLink("https://github.com/sagittariusHere")}
              >
                <GithubOutlined />
              </Button>
              <Button
                style={{ borderRadius: "50%", width: "30px", padding: 0 }}
                onClick={() =>
                  openLink(
                    "https://www.linkedin.com/in/abdullah-khalid-a8a27515b/"
                  )
                }
              >
                <LinkedinOutlined />
              </Button>
              <Button
                style={{ borderRadius: "50%", width: "30px", padding: 0 }}
                onClick={() => onEmailMe("sagittarius.here@gmail.com")}
              >
                <MailOutlined />
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Divider style={{ borderColor: token.colorBgBlur }}></Divider>
        <Flex justify="center" align="center">
          <Text style={{ color: token.colorTextSecondary, fontSize: "12px" }}>
            © Copyright 2025. Made by Abdullah Khalid
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
