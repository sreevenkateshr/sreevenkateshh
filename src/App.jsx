import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Aboutme from "./component/Aboutme";
import Skills from "./component/Skills";
import Workexpi from "./component/Workexpi";
import Myproject from "./component/Myproject";
import Contactus from "./component/Contactus";




export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Aboutme />
      <Skills />
      <Workexpi />
      <Myproject />
      <Contactus />

    </div>
  );
}
