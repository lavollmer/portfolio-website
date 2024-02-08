import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-row justify-content items-center space-evenly">
        <Header />
        <NavBar className="z-50" />
      </div>
      <MainPage />
      <About />
      <Skills />
      <Projects />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
