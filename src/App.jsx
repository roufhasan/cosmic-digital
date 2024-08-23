import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";
import ScrollSpy from "react-ui-scrollspy";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <main className="font-Montserrat">
      <Navbar />
      <ScrollSpy
        activeClass="active-scroll-spy"
        offsetBottom={120}
        scrollThrottle={50}
      >
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </ScrollSpy>
    </main>
  );
};

export default App;
