export default function WorkExperience() {
  const experiences = [
    {
      date: "Mar 2024 – Present",
      title: "Junior Web Developer",
      company: "Ordinal Technology Solutions",
      description:
        "Responsible for building responsive web applications, integrating APIs, and optimizing performance. Collaborating with design and backend teams to deliver high-quality products.",
      side: "right",
      isPresent: true,
    },
    {
      date: "Oct 2023 – Mar 2024",
      title: "Web Developer Intern",
      company: "Ordinal Technology Solutions",
      description:
        "Completed a 6-month internship focusing on modern web development practices, building UI components, and debugging issues in live projects.",
      side: "left",
      isPresent: false,
    },
  ];

  return (
    <section id="work" className="bg-white text-black py-16">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-5xl font-bold mb-20">Works</h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gray-400 h-full"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-20 flex w-full items-center ${
                exp.side === "left" ? "flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className="w-5/12">
                <p className="text-sm text-gray-500">{exp.date}</p>
                <h3 className="text-2xl font-bold mt-1">{exp.company}</h3>
                <p className="text-gray-500 text-sm mb-4">{exp.title}</p>
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              </div>

              {/* Dot in center with ripple */}
              <div className="w-2/12 flex justify-center">
                <div className="relative flex items-center justify-center">
                  {/* ripple rings (only for present item) */}
                  <span
                    className={`absolute rounded-full opacity-0 ${
                      exp.isPresent ? "animate-wave" : ""
                    }`}
                    style={{
                      width: 40,
                      height: 40,
                      border: "2px solid rgba(124,58,237,0.25)",
                    }}
                  />
                  <span
                    className={`absolute rounded-full opacity-0 ${
                      exp.isPresent ? "animate-wave delay-200" : ""
                    }`}
                    style={{
                      width: 28,
                      height: 28,
                      border: "2px solid rgba(124,58,237,0.35)",
                    }}
                  />

                  {/* central dot */}
                  <div
                    className={`w-5 h-5 rounded-full z-10 border-2 ${
                      exp.isPresent ? "bg-purple-500 border-white" : "bg-gray-400 border-white"
                    }`}
                  />
                </div>
              </div>

              {/* Empty spacer */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Ripple animation styles */}
      <style>{`
        @keyframes wave {
          0% {
            transform: scale(0.6);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.25);
            opacity: 0.25;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }
        .animate-wave {
          animation: wave 1.8s ease-out infinite;
        }
        .delay-200 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
}
