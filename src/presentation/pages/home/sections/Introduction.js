import React from 'react';
import { TypeAnimation } from 'react-type-animation';

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
            N<span className='text-cyan-400'>ilanga</span> J
            <span className='text-cyan-400'>ayawickrama</span>
          </h1>

          <h2 className="mt-2 text-lg md:text-3xl font-extrabold">
            <TypeAnimation
              sequence={[
                'Software Engineer ...', 2000, // wait 1.5s
                'Problem Solver ...', 2000,
                'Full-Stack Developer ...', 2000,
              ]}
              wrapper="span"
              speed={10}
              className="font-kaushan"
              style={{
                display: 'inline-block',
                color: '#ffffffff',
              }}
              repeat={Infinity}
            />
          </h2>

          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            A passionate developer and cloud & AI enthusiast specializing in creating scalable, high-quality software. Focused on clean design, thoughtful architecture, and long-term system reliability. Committed to delivering impactful and maintainable solutions.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex items-center gap-6">
            <button className="bg-cyan-400 text-black font-semibold px-5 py-2 rounded-full flex items-center border-4 border-cyan-400 overflow-hidden gap-2">
              Download CV ⬇️
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Introduction;
