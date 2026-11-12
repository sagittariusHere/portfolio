import { ConfigProvider, Layout, theme, ThemeConfig } from "antd";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import { ToastProvider } from "./context/ToastContext";
// import useResponsiveFontSize from "./hooks/useResponsiveFontSize";

function AppContent() {
  const { token } = theme.useToken();

  return (
    <ToastProvider>
      <Layout
        style={{
          backgroundColor: token.colorBgBase,
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Navbar />
        <Hero />
        <About />
        <Projects />
        {/* <Experience /> */}
        <Contact />
        <Footer />
      </Layout>
    </ToastProvider>
  );
}

function App() {
  // const fontSize = useResponsiveFontSize();
  const customTheme: ThemeConfig = {
    token: {
      colorPrimary: "#1D3557",
      colorText: "#1D3557",
      colorTextSecondary: "#F1FAEE",
      colorBgBase: "#FAFAF7",
      colorBgSolid: "#1D3557",
      colorBgBlur: "rgba(241, 250, 238, 0.18)",
      colorBgContainer: "#FFFFFF",
      colorLink: "#E63946",
      colorBorder: "#E5E5E0",
      colorBorderSecondary: "#EFEFEC",
      colorSuccess: "#52c41a",
      colorError: "#ff4d4f",
      colorWarning: "#faad14",
      fontSize: 15,
      borderRadius: 8,
    },
    components: {
      Button: {
        primaryColor: "#FAFAF7",
        textTextColor: "#1D3557",
        primaryShadow: "",
        algorithm: true,
      },
      Card: {
        boxShadow: "none",
        boxShadowTertiary: "none",
        colorBorderSecondary: "#E5E5E0",
      },
    },
  };
  return (
    <ConfigProvider theme={customTheme}>
      <AppContent />
    </ConfigProvider>
  );
}

export default App;
