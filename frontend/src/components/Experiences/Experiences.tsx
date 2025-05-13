import { Alert } from "antd";
import { SECTIONS } from "../../constants";
import SectionTitle from "../Shared/SectionTitle";

export default function Experience() {
  return (
    <div className="container" style={{ marginBottom: "50px" }}>
      <SectionTitle
        id={SECTIONS.EXPERIENCES}
        title="Experiences"
        subtitle="Here are some of my experiences."
      />
      <Alert
        message="Under construction"
        description={<>Coming soon!</>}
        type="warning"
        showIcon
        style={{ maxWidth: "400px", margin: "auto" }}
      />
    </div>
  );
}
