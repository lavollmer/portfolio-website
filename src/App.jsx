import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import ColorBackground from "./assets/ColorBackground.jpg";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <MainPage />
        <Projects />
        <Skills />
        <About />
        <Work />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
