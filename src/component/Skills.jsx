import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGit,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiMysql,
  SiCanva,
  SiFigma,
} from "react-icons/si";
import { useEffect } from "react";

export default function Skills() {
  // Apply Poppins font
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    document.body.style.fontFamily = "'Poppins', sans-serif";
  }, []);

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-5xl text-[#E44D26]" />, border: "#E44D26" },
    { name: "CSS", icon: <FaCss3Alt className="text-5xl text-[#264DE4]" />, border: "#264DE4" },
    { name: "JavaScript", icon: <FaJsSquare className="text-5xl text-[#F7DF1E]" />, border: "#F7DF1E" },
    { name: "Bootstrap", icon: <FaBootstrap className="text-5xl text-[#7B2CFB]" />, border: "#7B2CFB" },
    { name: "Tailwind", icon: <SiTailwindcss className="text-5xl text-[#38B2AC]" />, border: "#38B2AC" },
    { name: "React.js", icon: <FaReact className="text-5xl text-[#61DAFB]" />, border: "#61DAFB" },
    { name: "Node.js", icon: <FaNodeJs className="text-5xl text-[#3C873A]" />, border: "#3C873A" },
    { name: "Vite.js", icon: <SiVite className="text-5xl text-[#7248B6]" />, border: "#7248B6" },
    { name: "MySQL", icon: <SiMysql className="text-5xl text-[#4479A1]" />, border: "#4479A1" },
    { name: "Git", icon: <FaGit className="text-5xl text-[#F05032]" />, border: "#F05032" },
    { name: "Canva", icon: <SiCanva className="text-5xl text-[#00C4CC]" />, border: "#00C4CC" },
    { name: "Figma", icon: <SiFigma className="text-5xl text-[#F24E1E]" />, border: "#F24E1E" },
  ];

  return (
    <section id="skills" className="bg-black py-24 dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-center mb-16">
          <span className="text-white py-4 px-6 rounded font-bold text-3xl tracking-wider">
            Things I’m Good At
          </span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 place-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 rounded-lg p-6 w-36 hover:scale-105 transition-transform bg-black dark:bg-[#111]"
              style={{
                border: `2px solid ${skill.border}`,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <div>{skill.icon}</div>
              <p
                className="font-semibold text-sm"
                style={{ color: skill.border }}
              >
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
