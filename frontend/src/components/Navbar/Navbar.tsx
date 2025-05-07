import { Button, Flex, theme } from "antd";
import { Typography } from "antd";
import { scrollToSection } from "../../utils/helper";

const { Title } = Typography;

function Navbar() {
  const { token } = theme.useToken();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Flex
      style={{
        backgroundColor: token.colorBgBase,
        boxShadow: "0 5px 4px rgba(0, 0, 0, 0.2)",
        paddingInline: 32,
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Flex
        justify="space-between"
        align="center"
        style={{
          maxWidth: "70vw",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div
          onClick={scrollToTop}
          style={{
            cursor: "pointer",
            margin: "10px",
          }}
        >
          <Title
            level={2}
            style={{ minWidth: "45px", margin: 0, cursor: "pointer" }}
          >
            AK
          </Title>
        </div>
        <Flex gap="middle">
          <Button type="text" onClick={() => scrollToSection("about")}>
            About
          </Button>
          <Button type="text" onClick={() => scrollToSection("projects")}>
            Projects
          </Button>
          <Button type="text" onClick={() => scrollToSection("contact")}>
            Contact
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Navbar;
