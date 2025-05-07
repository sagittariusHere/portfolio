import { Image, Flex, Tooltip } from "antd";
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
];

export default function TechStack({ style }: TechStackProps) {
  return (
    <CardContainer title="See my diverse tech stack" style={style}>
      <Flex wrap gap={64} justify="center" style={{ marginTop: "20px" }}>
        {techStack.map((tech) => (
          <Tooltip key={tech.alt} title={tech.alt}>
            <Image width={128} preview={false} src={tech.src} alt={tech.alt} />
          </Tooltip>
        ))}
      </Flex>
    </CardContainer>
  );
}
