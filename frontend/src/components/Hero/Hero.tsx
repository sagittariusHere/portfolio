import { Button, Flex, Image } from "antd";
import { Typography } from "antd";
import { scrollToSection } from "../../utils/helper";
import HeroImage from "../../assets/images/ComputerIcon.png";

const { Title, Text } = Typography;

const HeroStyle = {
  margin: "6em 20px",
};

export default function Hero() {
  return (
    <Flex style={HeroStyle} justify="space-evenly" align="center" wrap>
      <Flex
        justify="center"
        align="center"
        vertical
        style={{ padding: "20px" }}
        gap="large"
      >
        <Title style={{ textAlign: "center" }}>
          Software Engineer | Web & Games
        </Title>
        <Text strong style={{ textAlign: "center", maxWidth: "600px" }}>
          I make things that live on the web and in games. I am a software
          engineer with a passion for creating beautiful and functional
          applications.
        </Text>
        <Button
          type="primary"
          size="large"
          style={{ marginTop: "20px" }}
          onClick={() => scrollToSection("projects")}
        >
          Explore Projects
        </Button>
      </Flex>
      <Flex>
        <Image
          style={{
            maxWidth: "500px",
            height: "auto",
          }}
          preview={false}
          src={HeroImage}
        />
      </Flex>
    </Flex>
  );
}
