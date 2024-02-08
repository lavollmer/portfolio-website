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
      <NavBar />
      <Header />
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
