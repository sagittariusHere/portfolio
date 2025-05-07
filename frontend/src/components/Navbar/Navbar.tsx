import { Button, Drawer, Flex, theme } from "antd";
import { Typography } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { scrollToSection } from "../../utils/helper";
import "./Navbar.css";
const { Title } = Typography;

function Navbar() {
  const { token } = theme.useToken();
  const [open, setOpen] = useState(false);

  const showDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const scrollAndClose = (id: string) => {
    scrollToSection(id);
    closeDrawer();
  };

  const navButtons = (
    <>
      <Button type="text" onClick={() => scrollToSection("about")}>
        About
      </Button>
      <Button type="text" onClick={() => scrollToSection("projects")}>
        Projects
      </Button>
      <Button type="text" onClick={() => scrollToSection("contact")}>
        Contact
      </Button>
    </>
  );

  return (
    <Flex
      style={{
        backgroundColor: token.colorBgBase,
        boxShadow: "0 5px 4px rgba(0, 0, 0, 0.2)",
        paddingInline: 16,
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
      }}
    >
      <Flex
        justify="space-between"
        align="center"
        style={{
          maxWidth: "90vw",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ cursor: "pointer", margin: "10px" }}
        >
          <Title
            level={2}
            style={{ minWidth: "45px", margin: 0, cursor: "pointer" }}
          >
            AK
          </Title>
        </div>

        <Flex
          gap="middle"
          style={{
            display: "none",
          }}
          className="nav-buttons"
        >
          {navButtons}
        </Flex>

        <Button
          type="text"
          icon={<MenuOutlined />}
          className="menu-button"
          onClick={showDrawer}
          style={{ fontSize: 20 }}
        />

        <Drawer
          title="Navigation"
          placement="top"
          onClose={closeDrawer}
          open={open}
          height="auto"
          style={{
            backgroundColor: token.colorBgBase,
          }}
        >
          <Flex vertical gap="middle">
            <Button type="text" onClick={() => scrollAndClose("about")}>
              About
            </Button>
            <Button type="text" onClick={() => scrollAndClose("projects")}>
              Projects
            </Button>
            <Button type="text" onClick={() => scrollAndClose("contact")}>
              Contact
            </Button>
          </Flex>
        </Drawer>
      </Flex>
    </Flex>
  );
}

export default Navbar;
