import { NavList } from "../../constants";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full  bg-black/25">
      <div className="w-full h-20 flex justify-between items-center px-4 md:px-12">
        {/* Logo */}
        <div className="text-neutral-400 text-3xl sm:text-7xl">
          <a href="#">PulseBit</a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-neutral-400 focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links for Larger Screens */}
        <div className="hidden md:flex space-x-4">
          {NavList.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="text-neutral-400 hover:border-white hover:uderline hover:border-b hover:text-slate-600 rounded px-3 py-2"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-transparent w-full  flex flex-col items-center py-4 space-y-2">
          {NavList.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="text-neutral-400 hover:bg-black/50 hover:text-slate-600 rounded px-3 py-2"
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
      
    </nav>
  );
};

export default Navbar;
