import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll on mobile when menu is open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full bg-brand-navy border-b border-brand-teal fixed top-0 left-0 z-50">
      {/* This header row fades out and disables pointer events when mobile menu is open */}
      <div
        className={`max-w-6xl mx-auto px-4 py-4 flex justify-between items-center transition-all duration-200
        ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        {/* Brand */}
        <h1 className="text-xl font-bold text-brand-purple">Noah Ragan</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-white text-sm md:text-base">
          <li>
            <a href="#about" className="hover:text-brand-teal transition">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-brand-teal transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-brand-teal transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-brand-teal transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger/X Toggle */}
        <button
          className="md:hidden focus:outline-none relative w-9 h-9 flex items-center justify-center z-50"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {!isOpen ? (
            // Hamburger (≡)
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all duration-300"
            >
              <rect y="8" width="36" height="3" rx="1.5" fill="#7f1fff" />
              <rect y="16.5" width="36" height="3" rx="1.5" fill="#00ffe0" />
              <rect y="25" width="36" height="3" rx="1.5" fill="#fff" />
            </svg>
          ) : (
            // X (close)
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all duration-300"
            >
              <line
                x1="9"
                y1="9"
                x2="27"
                y2="27"
                stroke="#00ffe0"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="27"
                y1="9"
                x2="9"
                y2="27"
                stroke="#7f1fff"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isOpen ? "max-h-[380px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative bg-gradient-to-br from-[#181032]/95 via-[#211442]/90 to-[#181032]/95 backdrop-blur-md rounded-b-2xl border-b-2 border-brand-teal shadow-2xl mx-2 mt-2">
          {/* Brand and Close */}
          <div className="flex items-center justify-between mb-4 px-4 pt-4">
            <span className="text-2xl font-extrabold text-brand-purple drop-shadow-md">
              Noah Ragan
            </span>
            <button
              onClick={closeMenu}
              aria-label="Close menu"
              className="transition focus:outline-none"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="9"
                  y1="9"
                  x2="27"
                  y2="27"
                  stroke="#00ffe0"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="27"
                  y1="9"
                  x2="9"
                  y2="27"
                  stroke="#7f1fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <div className="h-px bg-brand-teal opacity-40 mb-2 mx-2"></div>
          <ul className="flex flex-col gap-3 text-left px-6 pb-6">
            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="block text-white text-lg font-bold py-2 rounded hover:bg-brand-teal/20 hover:text-brand-teal transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={closeMenu}
                className="block text-white text-lg font-bold py-2 rounded hover:bg-brand-teal/20 hover:text-brand-teal transition"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={closeMenu}
                className="block text-white text-lg font-bold py-2 rounded hover:bg-brand-teal/20 hover:text-brand-teal transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block text-white text-lg font-bold py-2 rounded hover:bg-brand-teal/20 hover:text-brand-teal transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
