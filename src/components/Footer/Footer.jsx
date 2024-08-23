import Container from "../Shared/Container";
import { footerNavLinks } from "../../assets/data/navLinks";

const Footer = () => {
  return (
    <footer className="mx-auto mt-20 w-full max-w-[1920px] bg-[#181b21] py-20 text-white">
      <Container>
        <div className="grid grid-cols-1 gap-y-7 md:grid-cols-6">
          {/* company title */}
          <div className="md:col-span-2">
            <a
              href="#home"
              className="flex items-center text-2xl font-bold md:text-3xl"
            >
              <span className="text-green-400">D</span>
              <span className="-ml-3 text-violet-600">C</span>
              <span className="text-xl md:text-2xl">Cosmic Digital</span>
            </a>
            <p className="mt-3 max-w-72 font-medium text-gray-300 md:mt-6">
              Our beautiful designs open the door to a realm of limitless
              possibilities.
            </p>
          </div>

          {/* links div */}
          {footerNavLinks.map((nav, index) => (
            <div key={index}>
              <h6 className="text-lg font-semibold">{nav.category}</h6>
              <ul className="mt-3 space-y-2 md:mt-6">
                {nav.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="capitalize transition-all duration-200 ease-in-out hover:text-lime-500"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
