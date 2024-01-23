import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <MainPage />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
