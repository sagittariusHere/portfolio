import { ConfigProvider } from "antd";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { ToastProvider } from "./context/ToastContext";

const theme = {
  token: {
    colorPrimary: "#1b1b1b",
    colorText: "#1b1b1b",
    colorTextPlaceholder: "#66645e",
    colorBorder: "#b3b0a6",
    colorBgContainer: "transparent",
    colorError: "#d4380d",
    fontFamily: "Archivo, system-ui, sans-serif",
    fontSize: 15,
    borderRadius: 4,
  },
};

export default function App() {
  return (
    <ConfigProvider theme={theme}>
      <ToastProvider>
        <div id="top">
          <Navbar />
          <Hero />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </ToastProvider>
    </ConfigProvider>
  );
}
