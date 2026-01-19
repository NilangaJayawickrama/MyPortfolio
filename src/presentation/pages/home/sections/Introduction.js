import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Introduction = () => {
  return (
    <section className="pt-[70px] flex justify-center items-center py-12 md:py-16 bg-[#0b0f18]">
      <div className="w-[95%] border border-cyan-400 p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-10 rounded-lg">
        {/* ---- IMAGE CIRCLE ---- */}
        <div className="w-40 h-40 md:w-60 md:h-80 lg:w-80 lg:h-80 rounded-full border-4 border-cyan-400 overflow-hidden flex justify-center items-center bg-[#071014]  flex-shrink-0">
          <img
            src="/images/profile-image.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ---- RIGHT CONTENT ---- */}
        <div className="text-white max-w-xl text-center md:text-left md:pl-10">
          <h1 className="text-2xl md:text-4xl font-extrabold">
            N<span className="text-cyan-400">ilanga</span> J
            <span className="text-cyan-400">ayawickrama</span>
          </h1>

          <h2 className="mt-2 text-lg md:text-3xl font-extrabold">
            <TypeAnimation
              sequence={[
                "Software Engineer ...",
                2000, // wait 1.5s
                "Problem Solver ...",
                2000,
                "Full-Stack Developer ...",
                2000,
              ]}
              wrapper="span"
              speed={10}
              className="font-kaushan"
              style={{
                display: "inline-block",
                color: "#ffffffff",
              }}
              repeat={Infinity}
            />
          </h2>

          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            A passionate developer and cloud & AI enthusiast specializing in
            creating scalable, high-quality software. Focused on clean design,
            thoughtful architecture, and long-term system reliability. Committed
            to delivering impactful and maintainable solutions.
          </p>

          {/* Buttons */}
          <div className="mt-6 justify-center md:justify-start flex items-center gap-6 ">
            <a
              href="https://drive.google.com/uc?export=download&id=1z1sZjph1kQXusgfYhRrszRHOnbn2XI1b"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <button className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-cyan-500 hover:border-cyan-300 hover:shadow-2xl hover:shadow-cyan-600/50 bg-cyan-400 font-semibold text-black px-6 py-3 rounded-full flex items-center border-4 border-cyan-400 overflow-hidden gap-2 hover:text-white relative group">
                <span className="relative z-10">Download CV</span>
                <span className="group-hover:-rotate-12 transition-transform duration-300">
                  ⬇️
                </span>
                {/* Glow shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -rotate-2 group-hover:animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              </button>
            </a>
          </div>

          {/* Social icons row */}
          <div className="mt-5 flex items-center justify-center md:justify-start gap-5 text-cyan-400 text-2xl">
            <a
              href="https://github.com/NilangaJayawickrama"
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50 p-2 rounded-lg transition-all duration-300 ease-in-out group-hover:-rotate-6"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/nilanga-jayawickrama/"
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50 p-2 rounded-lg transition-all duration-300 ease-in-out group-hover:-rotate-6"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://x.com/NPJayawickrama"
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50 p-2 rounded-lg transition-all duration-300 ease-in-out group-hover:-rotate-6"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
