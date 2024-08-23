import { useEffect, useState } from "react";
import { BsList, BsX } from "react-icons/bs";
import { navLinks, footerNavLinks } from "../../assets/data/navLinks";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showMenu]);

  return (
    <nav className="fixed top-0 z-10 mx-auto flex h-20 w-full max-w-[1920px] items-center justify-between bg-[#d3d3d357] bg-opacity-10 bg-clip-padding px-4 py-5 shadow-sm backdrop-blur-md backdrop-filter md:left-1/2 md:right-1/2 md:-translate-x-1/2 md:px-10">
      {/* Logo */}
      <div>
        <a
          href="#home"
          className="flex items-center text-2xl font-bold md:text-3xl"
        >
          <span className="text-green-400">D</span>
          <span className="-ml-3 text-violet-600">C</span>
          <span className="text-xl md:text-2xl">Cosmic Digital</span>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setShowMenu(true)} className="md:hidden">
        <BsList className="text-2xl" />
      </button>

      {/* Mobile Menu Links */}
      {showMenu && (
        <ul className="fixed left-0 top-0 z-20 flex h-screen w-full flex-col items-center bg-white pt-40">
          <button onClick={() => setShowMenu(false)}>
            <BsX className="absolute right-4 top-4 text-3xl" />
          </button>
          <div className="space-y-5">
            {footerNavLinks[0].links.map(({ title, url }, index) => (
              <li
                key={index}
                className="text-center"
                onClick={() => setShowMenu(false)}
              >
                <a
                  href={url}
                  className="inline-block rounded-full px-2 py-1 text-lg font-medium capitalize"
                >
                  {title}
                </a>
              </li>
            ))}
          </div>
        </ul>
      )}

      {/* Desktop Menu Links */}
      <ul className="hidden items-center justify-center gap-6 md:flex">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a
              data-to-scrollspy-id={link.title}
              href={link.url}
              className="inline-block rounded-full px-2 py-1 font-medium capitalize transition-transform ease-in hover:-translate-y-0.5"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
