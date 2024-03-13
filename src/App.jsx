import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Navigation from "./components/Navigation";
import Background from "../src/assets/ColorBackground.jpg";
import ProjectDisplay from "./components/ProjectDisplay";
import Design from "./components/Design";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div
          className=" bg-cover h-screen w-screen bg-center"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <Navigation />
          <MainPage />
        </div>
        <ProjectDisplay />
        <Skills />
        <Design />
        <About />
        <Work />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
