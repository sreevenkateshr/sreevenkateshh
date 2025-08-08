import aboutPic from "../assets/aboutpagepic.png";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#0a0118] to-[#15022d] text-white py-24" // Increased from py-16 → py-24
    >
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-16"> 
        {/* Increased gap between image & text */}
        
        {/* Left Side - Illustration */}
        <div className="flex-1 flex justify-center">
          <img
            src={aboutPic}
            alt="About Me Illustration"
            className="max-w-sm md:max-w-md"
          />
        </div>

        {/* Right Side - Text */}
        <div className="flex-1 space-y-6"> {/* Added vertical spacing between text blocks */}
          <p className="uppercase text-sm text-purple-300 tracking-widest font-poppins">
            Who is Sree Venkatesh
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">A Bit About Me</h2>
          <p className="text-purple-100 leading-relaxed">
            I'm a software engineer passionate about bringing both the technical
            and visual aspects of digital products to life. I enjoy creating
            things that live on the internet — whether websites, applications, or
            anything in between. I believe in writing clean, maintainable code
            and keeping up with the latest technologies.
          </p>
          <p className="text-purple-100 leading-relaxed">
            I'm happiest when exploring, learning, and thinking about how to make
            things better.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition"
          >
            Download My Resume
          </a>
        </div>
      </div>
    </section>
  );
}
