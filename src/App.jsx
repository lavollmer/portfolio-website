import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import Background from  "../src/assets/ColorBackground.jpg";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-cover h-screen w-screen bg-center" style={{backgroundImage: `url(${Background})`}} >
          <Navigation className="absolute top-0"/>
          <MainPage />
        </div>
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
