import { FaLinkedinIn, FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white text-gray-800 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left Side */}
          <div>
            <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Sree Venkatesh
            </h1>
            <p className="mt-2 text-gray-500">Full-Stack Developer</p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a href="
https://www.linkedin.com/in/sree-venkatesh-413085267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition">
                <FaLinkedinIn className="text-gray-800 text-lg" />
              </a>
              <a href="https://www.instagram.com/__.saymyname_?igsh=MWQweWVlajhiOThvOQ==" className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition">
                <FaInstagram className="text-gray-800 text-lg" />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Let's Talk!</h2>
            <p className="mt-2 text-gray-500 max-w-sm">
              I am always open to discuss your project, Start saying Hi!
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-gray-800 text-lg" />
                <a href="mailto:your.email@example.com" className="hover:underline">
                  Sreevenkateshr@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-gray-800 text-lg" />
                <a href="tel:+916374926377" className="hover:underline">
                  +916374926377
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        {/* Bottom Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex gap-6">
  <a href="#about" className="hover:text-gray-800">About</a>
  <a href="#skills" className="hover:text-gray-800">Skills</a>
  <a href="#projects" className="hover:text-gray-800">Projects</a>
  <a href="#work" className="hover:text-gray-800">Work</a>
  <a href="#contact" className="hover:text-gray-800">Contact</a>
</div>

          <p className="mt-4 md:mt-0">© 2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
