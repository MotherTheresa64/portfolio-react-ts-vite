import React from "react";

const Footer = () => {
  return (
    <footer className="bg-brand-navy border-t border-brand-teal py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        {/* Left: copyright */}
        <p>&copy; {new Date().getFullYear()} Noah Ragan. All rights reserved.</p>

        {/* Right: GitHub + LinkedIn */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://github.com/MotherTheresa64"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-teal transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/noah-ragan-48b893372"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-teal transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
