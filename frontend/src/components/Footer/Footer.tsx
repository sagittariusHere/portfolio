import { Button, Divider, Flex, theme, Typography } from "antd";
import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import { openLink } from "../../utils/helper";

const { Text } = Typography;

export default function Footer() {
  const { token } = theme.useToken();

  const socialLinks = [
    { icon: <GithubOutlined />, link: "https://github.com/sagittariusHere" },
    {
      icon: <LinkedinOutlined />,
      link: "https://www.linkedin.com/in/abdullah-khalid-a8a27515b/",
    },
    { icon: <MailOutlined />, link: "mailto:sagittarius.here@gmail.com" },
  ];

  return (
    <Flex
      style={{
        width: "100%",
        backgroundColor: token.colorPrimary,
        paddingTop: "150px",
        marginTop: "-200px",
      }}
      justify="center"
      align="center"
    >
      <Flex
        className="container"
        style={{ margin: "40px auto" }}
        gap="middle"
        justify="center"
        align="center"
        vertical
      >
        <Flex gap="small">
          {socialLinks.map(({ icon, link }, index) => (
            <Button
              key={index}
              style={{ borderRadius: "50%", width: "30px", padding: 0 }}
              onClick={() => openLink(link)}
            >
              {icon}
            </Button>
          ))}
        </Flex>
        <Divider style={{ borderColor: token.colorBgBlur }} />
        <Text style={{ color: token.colorTextSecondary, fontSize: "12px" }}>
          Powered by caffeine and late-night code.
        </Text>
      </Flex>
    </Flex>
  );
}
