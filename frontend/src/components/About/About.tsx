import { Button, Col, Flex, Row, theme, Typography } from "antd";
import Tile from "../Shared/Tile";
import TechStack from "./TechStack";
import { scrollToSection } from "../../utils/helper";
import { SECTIONS } from "../../constants";

const { Title, Text } = Typography;

const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Python",
  "Solidity",
  "MongoDB",
  "AWS",
  "Web3",
];

export default function About() {
  const { token } = theme.useToken();

  return (
    <>
      <Flex
        id={SECTIONS.ABOUT}
        vertical
        style={{
          backgroundColor: token.colorBgSolid,
          paddingBottom: "300px",
        }}
      >
        <Flex
          justify="center"
          align="center"
          vertical
          className="container"
          style={{
            padding: "20px 0",
          }}
        >
          <Flex
            justify="center"
            align="center"
            vertical
            style={{ padding: "20px" }}
            gap="large"
          >
            <Title style={{ color: token.colorTextSecondary }}>
              Hi! I am Abdullah Khalid.
            </Title>
            <Text style={{ color: token.colorTextSecondary, maxWidth: "600px" }}>
              Here you will find more information about me, what I do, and my current
              skills mostly in terms of programming and technology
            </Text>
          </Flex>
          <Row justify="space-between" align="top" style={{ width: "100%" }} gutter={32}>
            <Col
              xs={24}
              md={12}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Title style={{ color: token.colorTextSecondary }}>Get to know me!</Title>
              <Text style={{ color: token.colorTextSecondary, maxWidth: "600px" }}>
                Here you will find more information about me, what I do, and my current
                skills mostly in terms of programming and technology
              </Text>
              <Button
                size="large"
                style={{ marginTop: "20px", alignSelf: "flex-start" }}
                onClick={() => scrollToSection(SECTIONS.CONTACT)}
              >
                Contact Me
              </Button>
            </Col>
            <Col xs={24} md={12}>
              <Title style={{ color: token.colorTextSecondary }}>Skills</Title>
              <Flex wrap gap="middle">
                {skills.map((skill, index) => (
                  <Tile key={index} text={skill} />
                ))}
              </Flex>
            </Col>
          </Row>
        </Flex>
      </Flex>
      <TechStack style={{ marginTop: "-200px" }} />
    </>
  );
}
