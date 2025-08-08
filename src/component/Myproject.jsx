import { FaGithub } from "react-icons/fa";
import pbImage from "../assets/pb.png";
import cineImage from "../assets/cinelogo.png";

export default function Projects() {
  const projects = [
    {
      title: "Paperboat Photography",
      subtitle: "Featured Project",
      description:
        "A professional photography portfolio website showcasing high-quality work with a modern and responsive design.",
      image: pbImage,
      liveLink: "https://paperboatphotography.in",
      githubLink: "https://github.com/yourusername/paperboat",
      side: "left",
    },
    {
      title: "Cinegram",
      subtitle: "Featured Project",
      description:
        "A React Native + Firebase mobile app for discovering and sharing movie content, with real-time updates and authentication.",
      image: cineImage,
      liveLink: "#",
      githubLink: "https://github.com/yourusername/cinegram",
      side: "right",
    },
    // You can easily add more projects here
  ];

  return (
    <section id="projects" className="relative bg-gradient-to-b from-[#0a0118] to-[#15022d] py-20 text-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20 ${
              project.side === "right" ? "md:[direction:rtl]" : ""
            }`}
          >
            {/* Project Image */}
            <div className="flex justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="max-w-[280px] md:max-w-[320px] object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>

            {/* Project Info */}
            <div
              className={`text-center md:text-left ${
                project.side === "right" ? "md:[direction:ltr]" : ""
              }`}
            >
              <p className="text-purple-400 font-semibold tracking-wide uppercase mb-2">
                {project.subtitle}
              </p>
              <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex justify-center md:justify-start items-center gap-5">
                {project.liveLink !== "#" && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-purple-600 rounded-md hover:bg-purple-700 hover:scale-105 transition-transform duration-300"
                  >
                    Live Site
                  </a>
                )}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-gray-300 hover:text-purple-400 hover:scale-110 transition-transform duration-300"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Spotlight Background */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-500 opacity-20 blur-[250px] rounded-full pointer-events-none"></div>
    </section>
  );
}
