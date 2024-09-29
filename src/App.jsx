import About from "./About";
import "./App.css";
import Contect from "./Contect";
import Home from "./Home";
import Nav from "./Nav";
import Projects from "./Projects";

function App() {
  return (
    <>
      <Nav />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contect">
        <Contect />
      </section>
      <footer></footer>
    </>
  );
}

export default App;
