import { Image, Tooltip, Row, Col } from "antd";
import CardContainer from "../Shared/CardContainer";
import { CSSProperties } from "react";

type TechStackProps = {
  style?: CSSProperties;
};

const techStack = [
  {
    alt: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
  },
  {
    alt: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    alt: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    alt: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    alt: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
  },
  {
    alt: "Ant Design",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-plain-wordmark.svg",
  },
  {
    alt: "HTML5",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
  },
  {
    alt: "CSS3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
  },
  {
    alt: "AWS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    alt: "Docker",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg",
  },
  {
    alt: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
  },
  {
    alt: "Unity",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original-wordmark.svg",
  },
  {
    alt: "Blender",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original-wordmark.svg",
  },
  {
    alt: "Solidity",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
  },
  {
    alt: "Vercel",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg",
  },
  {
    alt: "Vercel",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/circleci/circleci-plain-wordmark.svg",
  },
];

export default function TechStack({ style }: TechStackProps) {
  return (
    <CardContainer title="See my diverse tech stack" style={style}>
      <Row gutter={[24, 24]} justify="center" style={{ marginTop: "20px" }}>
        {techStack.map((tech) => (
          <Col
            key={tech.alt}
            xs={12}
            sm={8}
            md={6}
            lg={4}
            style={{ textAlign: "center" }}
          >
            <Tooltip title={tech.alt}>
              <Image width={96} preview={false} src={tech.src} alt={tech.alt} />
            </Tooltip>
          </Col>
        ))}
      </Row>
    </CardContainer>
  );
}
