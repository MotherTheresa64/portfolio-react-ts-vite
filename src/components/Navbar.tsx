import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Disable scroll when menu is open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full bg-brand-navy border-b border-brand-teal fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-xl font-bold text-brand-purple">Noah Ragan</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-white text-sm md:text-base">
          <li><a href="#about" className="hover:text-brand-teal">About</a></li>
          <li><a href="#skills" className="hover:text-brand-teal">Skills</a></li>
          <li><a href="#projects" className="hover:text-brand-teal">Projects</a></li>
          <li><a href="#contact" className="hover:text-brand-teal">Contact</a></li>
        </ul>

        {/* Mobile Hamburger / X Toggle */}
        <button
          className="md:hidden text-white focus:outline-none relative w-8 h-8"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`absolute left-0 top-2 block h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-4 block h-0.5 w-full bg-white transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 top-6 block h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        />
      )}

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out px-4 transform z-50 relative ${
          isOpen
            ? "max-h-64 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <ul className="flex flex-col space-y-2 text-white text-sm py-2 transition-opacity duration-500">
          <li><a href="#about" onClick={closeMenu} className="hover:text-brand-teal">About</a></li>
          <li><a href="#skills" onClick={closeMenu} className="hover:text-brand-teal">Skills</a></li>
          <li><a href="#projects" onClick={closeMenu} className="hover:text-brand-teal">Projects</a></li>
          <li><a href="#contact" onClick={closeMenu} className="hover:text-brand-teal">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
