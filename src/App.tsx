import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollUp from "./components/ScrollUp";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Qualification from "./pages/Qualification/Qualification";
import Skills from "./pages/Skills/Skills";

const App: React.FC = () => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.classList.remove("light", "dark");
      htmlElement.classList.add(themeMode);
    }
  }, [themeMode]);

  return (
    <>
      <Header darkTheme={darkTheme} lightTheme={lightTheme} themeMode={themeMode} />
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Projects />
      <Contact />
      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
