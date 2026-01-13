import React from "react";

const AboutMe = () => {
  return (
    <section className="pt-[70px] flex justify-center items-center py-10 sm:py-12 md:py-16 bg-[#111827]">
      <div className="w-[90%] max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-10 lg:gap-12">
        {/* LEFT TEXT - WIDENED */}
        <div className="text-white max-w-2xl lg:max-w-6xl text-center lg:text-left flex-1 px-2 lg:px-0">

          <p className="text-xs sm:text-sm lg:text-base font-semibold tracking-[0.2em] uppercase text-gray-300 mb-2">
            About Me
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-5xl font-extrabold text-cyan-400 leading-tight">
            Passion for Technology & Growth
          </h2>

          <div className="mt-2 lg:mt-4 h-[1px] sm:h-[2px] w-24 sm:w-30 lg:w-40 bg-cyan-400 mx-auto lg:mx-0" />

          <p className="mt-6 text-xs sm:text-sm lg:text-lg lg:text-justify leading-relaxed text-gray-300 max-w-md lg:max-w-3xl mx-auto lg:mx-0">
            A passionate software engineer with strong foundations in modern technologies, focused on building scalable, efficient, and reliable applications. Driven by continuous learning, problem-solving, and delivering high-quality solutions in challenging environments.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end w-full lg:w-80 xl:w-96 flex-shrink-0 ml-0 lg:ml-6 xl:ml-8">
          <img
            src="/images/aboutme-image.png"
            alt="About me"
            className="w-44 sm:w-52 md:w-64 lg:w-72 xl:w-80 max-h-80 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
