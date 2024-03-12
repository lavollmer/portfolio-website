import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import Background from "../src/assets/ColorBackground.jpg";
import Projects from "./components/Projects";
import ProjectDisplay from "./components/ProjectDisplay";
import { NavLink, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div
          className=" bg-cover h-screen w-screen bg-center"
          style={{ backgroundImage: `url(${Background})` }}
        >
          {/* <div className="absolute inset-y-0 right-0 w-1/3 bg-customColor opacity-40 z-10 "></div> */}
          <Navigation />
          <MainPage />
        </div>
        <NavLink exact to="/project" activeClassName="active">
          <ProjectDisplay />
        </NavLink>
        <Skills />
        <NavLink exact to="/about" activeClassName="active">
          <About />
        </NavLink>
        <Work />
        <Contact />
        <Footer />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<ProjectDisplay />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
