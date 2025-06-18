import { ConfigProvider, Layout, theme, ThemeConfig } from "antd";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experiences/Experiences";
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
      colorBgBase: "#F1FAEE",
      colorBgSolid: "#1D3557",
      colorBgBlur: "#457B9D",
      colorBgContainer: "#CDEDF0",
      colorLink: "#1890ff",
      colorSuccess: "#52c41a",
      colorError: "#ff4d4f",
      colorWarning: "#faad14",
      fontSize: 18,
    },
    components: {
      Button: {
        primaryColor: "#F1FAEE",
        textTextColor: "#1D3557",
        primaryShadow: "",
        algorithm: true,
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
