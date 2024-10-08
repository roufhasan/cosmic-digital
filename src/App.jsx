import Navbar from "./components/Navbar/Navbar";
import ScrollSpy from "react-ui-scrollspy";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Achievements from "./components/Achievements/Achievements";

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
        <Achievements />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </ScrollSpy>
    </main>
  );
};

export default App;
