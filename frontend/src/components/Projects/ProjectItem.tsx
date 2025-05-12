import { Button, Card, Flex, Image, theme, Tooltip, Typography } from "antd";
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
  imageUrl,
  description,
  techStackList,
  projectLink,
}: ProjectItemProps) {
  const { token } = theme.useToken();
  return (
    <Card
      style={{
        borderRadius: "16px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
        background: token.colorBgContainer,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <Flex vertical align="center" style={{ height: "100%" }}>
        <Flex
          justify="center"
          align="center"
          style={{
            height: "200px",
            overflow: "hidden",
            borderRadius: "8px",
            marginBottom: "16px",
          }}
        >
          <img
            src={imageUrl}
            alt="project"
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
              borderRadius: "8px",
            }}
          />
        </Flex>

        <Flex vertical align="center" justify="center" style={{ flex: 1 }}>
          <Title level={4} style={{ textAlign: "center", margin: "0.5em 0" }}>
            {description.title}
          </Title>
          <Text style={{ textAlign: "center" }}>{description.text}</Text>

          {techStackList && (
            <Flex
              justify="center"
              align="center"
              wrap="wrap"
              gap="middle"
              style={{ marginTop: "16px" }}
            >
              {techStackList.map((tech, index) => (
                <Tooltip title={tech.alt} key={index}>
                  <Image height={40} preview={false} src={tech.src} alt={tech.alt} />
                </Tooltip>
              ))}
            </Flex>
          )}
        </Flex>

        {projectLink && (
          <Button
            type="primary"
            style={{ marginTop: "25px", width: "60%" }}
            onClick={() => openLink(projectLink)}
          >
            See Project
          </Button>
        )}
      </Flex>
    </Card>
  );
}
