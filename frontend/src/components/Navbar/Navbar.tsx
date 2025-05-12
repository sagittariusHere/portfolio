import { Button, Drawer, Flex, theme } from "antd";
import { Typography } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { scrollToSection } from "../../utils/helper";
import NavigationButtons from "./NavigactionButtons";
import "./Navbar.css";
import { NAV_ITEMS } from "../../constants";

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

  return (
    <Flex
      style={{
        backgroundColor: token.colorBgBase,
        boxShadow: "0 5px 4px rgba(0, 0, 0, 0.2)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
      }}
    >
      <Flex
        justify="space-between"
        align="center"
        className="container"
        style={{
          width: "100%",
        }}
      >
        <Title
          level={2}
          style={{ minWidth: "45px", margin: "10px", cursor: "pointer" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          AK
        </Title>

        <Flex
          gap="middle"
          style={{
            display: "none",
          }}
          className="nav-buttons"
        >
          <NavigationButtons items={NAV_ITEMS} onClick={scrollToSection} />
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
            <NavigationButtons items={NAV_ITEMS} onClick={scrollAndClose} />
          </Flex>
        </Drawer>
      </Flex>
    </Flex>
  );
}

export default Navbar;
