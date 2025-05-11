import { Button, Col, Flex, Image, Row, Tooltip, Typography } from "antd";
import { openLink } from "../../utils/helper";
import { TechStackItem } from "../../types";

const { Title, Text } = Typography;

interface ProjectItemProps {
  index: number;
  imageUrl: string;
  description: { title: string; text: string };
  techStackList?: TechStackItem[];
  projectLink?: string;
}

export default function ProjectItem({
  index,
  imageUrl,
  description,
  techStackList,
  projectLink,
}: ProjectItemProps) {
  return (
    <Row align="middle">
      <Col sm={24} md={{ span: 12, order: index % 2 === 0 ? 1 : 2 }}>
        <Flex justify="center" align="center" style={{ height: "100%" }}>
          <Image preview={false} src={imageUrl} height="auto" />
        </Flex>
      </Col>

      <Col sm={24} md={{ span: 12, order: index % 2 === 0 ? 2 : 1 }}>
        <Flex
          justify="center"
          align="center"
          vertical
          style={{ height: "100%", padding: "20px" }}
        >
          <Title style={{ textAlign: "center" }}>{description.title}</Title>
          <Text style={{ textAlign: "center" }}>{description.text}</Text>
          {techStackList && (
            <>
              <Title level={5} style={{ marginTop: "20px" }}>
                Tech Stack
              </Title>
              <Flex justify="center" align="center" wrap="wrap" gap="middle">
                {techStackList.map((tech, index) => (
                  <Tooltip title={tech.alt} key={index}>
                    <Image height={50} preview={false} src={tech.src} alt={tech.alt} />
                  </Tooltip>
                ))}
              </Flex>
            </>
          )}
          {projectLink && (
            <Button
              type="primary"
              style={{ margin: "30px" }}
              onClick={() => openLink(projectLink)}
            >
              See Project
            </Button>
          )}
        </Flex>
      </Col>
    </Row>
  );
}
