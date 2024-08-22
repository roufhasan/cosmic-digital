import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";
import ScrollSpy from "react-ui-scrollspy";
import Services from "./components/Services/Services";

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
        <div id="projects" className="mt-20 h-screen">
          projects
        </div>
        <div id="contact" className="h-screen">
          contact
        </div>
      </ScrollSpy>
    </main>
  );
};

export default App;
