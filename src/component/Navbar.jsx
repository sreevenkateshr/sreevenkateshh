import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar({ theme, toggleTheme }) {
  const [darkMode, setDarkMode] = useState(theme === "dark");

  useEffect(() => {
    setDarkMode(theme === "dark");
  }, [theme]);

  return (
    <nav className="flex justify-between items-center py-6 px-6 sm:px-12 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 font-poppins">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide cursor-pointer">
        sree<span className="text-purple-500">.</span>
      </div>

      {/* Links */}
      <ul className="hidden sm:flex gap-8 text-sm font-medium text-gray-700 dark:text-gray-300 scroll-smooth">
        <li>
          <a
            href="#about"
            className="hover:text-black dark:hover:text-white cursor-pointer"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="hover:text-black dark:hover:text-white cursor-pointer"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="hover:text-black dark:hover:text-white cursor-pointer"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#work"
            className="hover:text-black dark:hover:text-white cursor-pointer"
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-black dark:hover:text-white cursor-pointer"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Theme Toggle */}
      <div
        className="cursor-pointer text-lg hover:scale-110 transition-transform"
        onClick={toggleTheme}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </div>
    </nav>
  );
}
