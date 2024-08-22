import Navbar from "./components/Navbar";
import ScrollSpy from "react-ui-scrollspy";

const App = () => {
  return (
    <main className="font-Montserrat">
      <Navbar />
      <ScrollSpy
        activeClass="active-scroll-spy"
        offsetBottom={120}
        scrollThrottle={50}
      >
        <div id="home" className="h-screen pt-20">
          Home
        </div>
        <div id="services" className="h-screen">
          serv
        </div>
        <div id="projects" className="h-screen">
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
