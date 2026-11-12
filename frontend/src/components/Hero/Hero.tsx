import { Button, Col, Row, Typography } from "antd";
import { scrollToSection } from "../../utils/helper";
import { SECTIONS } from "../../constants";

const { Title, Text } = Typography;

export default function Hero() {
  return (
    <div className="container" style={{ position: "relative" }}>
      <Row
        justify="center"
        align="middle"
        style={{
          margin: "3em 0",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          minHeight: "420px",
        }}
      >
        <Col xs={24} md={20} lg={18} style={{ padding: "20px" }}>
          <Title>Software Engineer</Title>
          <Title level={3} style={{ margin: "16px 0" }}>
            Web & Games
          </Title>
          <Text strong style={{ display: "block", maxWidth: "600px", margin: "0 auto" }}>
            I make things that live on the web and in games. I am a software engineer with
            a passion for creating beautiful and functional applications.
          </Text>
          <Button
            type="primary"
            size="large"
            style={{ marginTop: "20px" }}
            onClick={() => scrollToSection(SECTIONS.PROJECTS)}
          >
            Explore Projects
          </Button>
        </Col>
      </Row>
    </div>
  );
}
