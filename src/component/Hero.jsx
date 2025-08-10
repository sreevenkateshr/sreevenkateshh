import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

export default function Hero() {
  return (
    <section className="text-black bg-black min-h-[80vh] flex flex-col justify-center px-6 sm:px-12 transition-colors duration-300 font-poppins">
      <div className="container mx-auto max-w-4xl flex flex-col items-center text-center">
        
        {/* Intro */}
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 transform transition-transform duration-300 hover:-translate-x-2">
          Hey, I'm
        </p>

        {/* Animated Gradient Name */}
        <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
          Sree Venkatesh
        </h1>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm sm:text-base leading-relaxed text-justify">
          I specialize in creating dynamic and engaging user experiences with a strong foundation in HTML, CSS, and JavaScript.
          My expertise extends to cutting-edge frameworks and libraries, enabling me to implement interactive features that
          enhance usability and functionality. Additionally, I bring valuable experience working with content management
          systems like WordPress, allowing me to build and customize websites that are both visually appealing and easy to manage.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            href="#"
            className="flex items-center gap-2 px-5 py-3 text-sm font-medium border border-transparent rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition"
          >
            <FaEnvelope className="text-lg" />
            <span>Send an email</span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/sree-venkatesh-413085267"
            className="flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-lg border border-gray-400 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <FaLinkedin className="text-lg text-blue-600" />
            <span className="text-white">LinkedIn</span>
          </a>
          
          {/* Instagram */}
          <a
            href="https://www.instagram.com/__.saymyname_"
            className="flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-lg border border-transparent hover:opacity-90 transition-colors"
            style={{
              background: "linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)",
            }}
          >
            <FaInstagram
              className="text-lg"
              style={{
                background: "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            />
            <span className="text-white">Instagram</span>
          </a>

          <a
            href="https://github.com/sreevenkateshr/sreevenkateshh"
            className="flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-lg border border-pink-500 text-pink-500 hover:bg-pink-100 dark:hover:bg-pink-900 transition-colors"
          >
            <FaGithub className="text-lg" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
