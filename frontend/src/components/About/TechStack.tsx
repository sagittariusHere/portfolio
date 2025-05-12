import { Image, Tooltip, Row, Col } from "antd";
import CardContainer from "../Shared/CardContainer";
import { CSSProperties } from "react";
import { TECH_STACK } from "../../constants";

type TechStackProps = {
  style?: CSSProperties;
};

export default function TechStack({ style }: TechStackProps) {
  return (
    <div className="container">
      <CardContainer
        title="Explore My Tech Stack"
        subtitle="A collection of technologies I've worked with throughout my 
      career—ranging from game development and blockchain to full-stack web engineering."
        style={style}
      >
        <Row gutter={[24, 24]} justify="center" style={{ marginTop: "20px" }}>
          {TECH_STACK.map((tech) => (
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
    </div>
  );
}
