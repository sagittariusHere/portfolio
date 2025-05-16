import { Col, Row } from "antd";
import { SECTIONS } from "../../constants";
import SectionTitle from "../Shared/SectionTitle";
import ProjectItem from "./ProjectItem";
import Portfolio from "../../assets/images/portfolio.png";
import Myntist from "../../assets/images/myntist.png";
import Potus from "../../assets/images/potus.gif";
import DiceMerge from "../../assets/images/dice-merge.png";
import BubbleSort from "../../assets/images/bubble-sort.png";
import WaterSort from "../../assets/images/water-sort.png";
import { getTechByName } from "../../utils/helper";
import { TechStackItem } from "../../types";

const projects = [
  {
    imageUrl: Portfolio,
    description: {
      title: "Portfolio Website",
      text: "Personal project showcasing my portfolio. Built with React and TypeScript. Responsive design with Ant Design. Deployed on Vercel.",
    },
    techStackList: [
      getTechByName("React"),
      getTechByName("TypeScript"),
      getTechByName("Ant Design"),
      getTechByName("Vercel"),
    ].filter(Boolean) as TechStackItem[],
    link: "https://portfolio-one-sigma-71.vercel.app/",
  },
  {
    imageUrl: Myntist,
    description: {
      title: "Myntist",
      text: "Built to facilitate buying and selling of digital assets with its very own cryptocurrency MYNT token. Leverage the power of blockchain technology.",
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
      text: "Online multiplayer Trading Card Game with NFTs and cryptocurrency features. Players can collect, trade, and battle with unique cards. Built with Unity and C#, featuring real-time multiplayer functionality using Photon.",
    },
    techStackList: [
      getTechByName("Unity"),
      getTechByName("Blender"),
      getTechByName("Photon"),
    ].filter(Boolean) as TechStackItem[],
    link: "https://www.pixelpotus.com/",
  },
  {
    imageUrl: DiceMerge,
    description: {
      title: "Dice Merge",
      text: "A fast-paced, logic-driven puzzle game featuring fluid dice merge mechanics and smooth animations. Built in Unity with C#, optimized for offline play and lightweight performance.",
    },
    techStackList: [getTechByName("Unity"), getTechByName("Blender")].filter(
      Boolean
    ) as TechStackItem[],
    link: "https://play.google.com/store/apps/details?id=com.dicedom.mergepuzzlegames.peachupacha",
  },
  {
    imageUrl: BubbleSort,
    description: {
      title: "Ball Sort",
      text: "A visually satisfying logic game where players sort colored balls into matching tubes. Features 1000+ levels, smooth drag-and-drop mechanics, and fluid transitions. Developed in Unity using C#, optimized for mobile performance.",
    },
    techStackList: [getTechByName("Unity"), getTechByName("Blender")].filter(
      Boolean
    ) as TechStackItem[],
    link: "https://play.google.com/store/apps/details?id=com.ball.sortout.puzzle.game",
  },
  {
    imageUrl: WaterSort,
    description: {
      title: "Water Sort",
      text: "A relaxing yet challenging color-sorting puzzle where players pour colored water into tubes to group matching colors. Built with Unity and C#, featuring smooth liquid transitions, intuitive tap controls, and 1000+ progressively difficult levels.",
    },
    techStackList: [getTechByName("Unity"), getTechByName("Blender")].filter(
      Boolean
    ) as TechStackItem[],
    link: "https://play.google.com/store/apps/details?id=com.peachupachagames.water.sort3d.puzzle.color.sorting.free",
  },
];

export default function Projects() {
  return (
    <div className="container" style={{ marginBottom: "50px" }}>
      <SectionTitle
        id={SECTIONS.PROJECTS}
        title="Projects"
        subtitle="From interactive web apps to blockchain platforms and polished mobile games
         — explore a diverse collection of my work across full-stack development,
          smart contracts, and game design."
      />
      <Row justify="center" gutter={[34, 34]}>
        {projects.map((project, index) => (
          <Col key={index} sm={24} md={12} lg={12} xl={8}>
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
