//import components
import Navigation from "./components/Navigation";
import MainPage from "./components/MainPage";
import ProjectDisplay from "./components/ProjectDisplay";
import Skills from "./components/Skills";
import Design from "./components/Design";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

//import Background image for cover
import Background from "../src/assets/ColorBackground.avif";
//import BrowserRouter for routing
import { BrowserRouter } from "react-router-dom";

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
        <Resume />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
