import { Col, Row } from "antd";
import { SECTIONS } from "../../constants";
import SectionTitle from "../Shared/SectionTitle";
import ProjectItem from "./ProjectItem";
import Portfolio from "../../assets/images/portfolio.png";
import Myntist from "../../assets/images/myntist.png";
import Games from "../../assets/images/games.png";
import Potus from "../../assets/images/potus.gif";
import { getTechByName } from "../../utils/helper";
import { TechStackItem } from "../../types";

const projects = [
  {
    imageUrl: Portfolio,
    description: {
      title: "Personal Website",
      text: "Website to showcase my portfolio and projects. Built with React and TypeScript.",
    },
    techStackList: [
      getTechByName("React"),
      getTechByName("TypeScript"),
      getTechByName("Ant Design"),
    ].filter(Boolean) as TechStackItem[],
    link: "https://portfolio-one-sigma-71.vercel.app/",
  },
  {
    imageUrl: Myntist,
    description: {
      title: "Myntist - NFT Marketplace",
      text: "Built to facilitate buying and selling of digital assets with its very own cryptocurrency MYNT token.",
    },
    techStackList: [
      getTechByName("React"),
      getTechByName("JavaScript"),
      getTechByName("Node.js"),
      getTechByName("Solidity"),
    ].filter(Boolean) as TechStackItem[],
    link: "https://www.myntist.com/",
  },
  {
    imageUrl: Potus,
    description: {
      title: "Pixel Potus",
      text: "Online multiplayer Trading Card Game with NFTs and cryptocurrency features.",
    },
    techStackList: [
      getTechByName("Unity"),
      getTechByName("Blender"),
      getTechByName("Photon"),
    ].filter(Boolean) as TechStackItem[],
    link: "https://www.pixelpotus.com/",
  },
  {
    imageUrl: Games,
    description: {
      title: "Games on Google Play",
      text: "Puzzle and board games published on Google Play Store.",
    },
    techStackList: [getTechByName("Unity"), getTechByName("Blender")].filter(
      Boolean
    ) as TechStackItem[],
    link: "https://play.google.com/store/apps/dev?id=8207153197051697284&hl",
  },
];

export default function Projects() {
  return (
    <div style={{ margin: "0 5%" }}>
      <SectionTitle
        id={SECTIONS.PROJECTS}
        title="Projects"
        subtitle="Here are some of my projects. Here are some of my projects. 
        Here are some of my projects. Here are some of my projects"
      />
      <Row justify="center" gutter={[24, 24]}>
        {projects.map((project, index) => (
          <Col key={index} span={24}>
            <ProjectItem
              index={index}
              imageUrl={project.imageUrl}
              description={project.description}
              techStackList={project.techStackList}
              projectLink={project.link}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
