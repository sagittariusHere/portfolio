import { Button, Flex, theme, Typography } from "antd";
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
    <Flex id={SECTIONS.ABOUT} vertical>
      <Flex
        justify="center"
        align="center"
        vertical
        style={{
          padding: "20px",
          backgroundColor: token.colorBgSolid,
          paddingBottom: "300px",
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
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </Text>
        </Flex>
        <Flex gap="large" justify="space-evenly" wrap>
          <Flex vertical align="start">
            <Title style={{ color: token.colorTextSecondary }}>
              Get to know me!
            </Title>
            <Text
              style={{ color: token.colorTextSecondary, maxWidth: "500px" }}
            >
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </Text>
            <Button
              size="large"
              style={{ marginTop: "20px", width: "auto" }}
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </Flex>
          <Flex vertical>
            <Title style={{ color: token.colorTextSecondary }}>Skills</Title>
            <Flex wrap gap="middle" style={{ maxWidth: "500px" }}>
              {skills.map((skill, index) => (
                <Tile key={index} text={skill} />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <TechStack style={{ marginTop: "-200px" }} />
    </Flex>
  );
}
