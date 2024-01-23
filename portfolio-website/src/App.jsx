import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <MainPage />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
