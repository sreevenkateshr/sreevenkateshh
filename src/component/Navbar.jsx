import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ theme, toggleTheme }) {
  const [darkMode, setDarkMode] = useState(theme === "dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setDarkMode(theme === "dark");
  }, [theme]);

  return (
    <nav className="flex justify-between items-center py-6 px-6 sm:px-12 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 font-poppins relative">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide cursor-pointer">
        sree<span className="text-purple-500">.</span>
      </div>

      {/* Desktop Links */}
      <ul className="hidden sm:flex gap-8 text-sm font-medium text-gray-700 dark:text-gray-300 scroll-smooth">
        <li><a href="#about" className="hover:text-black dark:hover:text-white">About</a></li>
        <li><a href="#skills" className="hover:text-black dark:hover:text-white">Skills</a></li>
        <li><a href="#projects" className="hover:text-black dark:hover:text-white">Projects</a></li>
        <li><a href="#work" className="hover:text-black dark:hover:text-white">Work</a></li>
        <li><a href="#contact" className="hover:text-black dark:hover:text-white">Contact</a></li>
      </ul>

      {/* Mobile Hamburger Button */}
      <div className="sm:hidden cursor-pointer text-xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-white dark:bg-black text-center flex flex-col gap-6 py-6 text-gray-700 dark:text-gray-300 sm:hidden shadow-md z-50">
          <li><a onClick={() => setMenuOpen(false)} href="#about">About</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#skills">Skills</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#projects">Projects</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#work">Work</a></li>
          <li><a onClick={() => setMenuOpen(false)} href="#contact">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
