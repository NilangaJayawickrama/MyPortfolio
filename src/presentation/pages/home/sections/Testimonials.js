import React from "react";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Frontend Developer",
      gender: "male",
      text: "Working with you was an incredible experience. The attention to detail and responsiveness exceeded expectations.",
    },
    {
      id: 2,
      name: "Sarah Lee",
      role: "Product Manager",
      gender: "female",
      text: "You delivered a clean, performant UI on time. Communication was clear throughout the entire project.",
    },
    {
      id: 3,
      name: "Michael Smith",
      role: "Tech Lead",
      gender: "male",
      text: "Your understanding of modern frontend practices made collaboration smooth and efficient.",
    },
  ];

  const getAvatarSrc = (gender) => {
    if (gender === "female") return "/images/avatar-female.png";
    return "/images/avatar-male.png";
  };

  // auto-advance every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // compute visible testimonials: 2 on lg+, 1 on smaller
  const visibleTestimonials = (isLarge) => {
    if (isLarge) {
      const second = (index + 1) % testimonials.length;
      return [testimonials[index], testimonials[second]];
    }
    return [testimonials[index]];
  };

  const goNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="pt-[70px] flex justify-center items-center py-10 sm:py-12 md:py-16 bg-[#111827]">
      <div className="w-full max-w-6xl px-4">
        <p className="text-xs sm:text-sm lg:text-base font-semibold tracking-[0.2em] uppercase text-gray-300 mb-6 text-center lg:text-left">
          Testimonials
        </p>

        {/* Desktop / large: 2 cards */}
        {/* <div className="hidden lg:grid grid-cols-2 gap-6">
          {visibleTestimonials(true).map((t) => (
            <div
              key={t.id}
              className="bg-[#050812] border border-cyan-500/40 rounded-xl p-4 flex items-center gap-4 shadow-lg transition-all duration-300"
            >
              <img
                src={getAvatarSrc(t.gender)}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
              <div className="text-left">
                <p className="text-gray-200 text-sm mb-2">{t.text}</p>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div> */}

        {/* Mobile / tablet: 1 card */}
        {/* <div className="lg:hidden">
          {visibleTestimonials(false).map((t) => (
            <div
              key={t.id}
              className="bg-[#050812] border border-cyan-500/40 rounded-xl p-4 flex items-center gap-4 shadow-lg transition-all duration-300"
            >
              <img
                src={getAvatarSrc(t.gender)}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
              <div className="text-left">
                <p className="text-gray-200 text-sm mb-2">{t.text}</p>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div> */}

        <div className="relative overflow-hidden max-w-6xl mx-auto rounded-2xl lg:px-8">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * 50}%)`,
              willChange: "transform",
            }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={t.id}
                className="w-[100vw] lg:w-1/2 h-full flex-shrink-0 px-4"
              >
                <div className="bg-[#050812] border border-cyan-500/40 rounded-xl p-6 flex items-center gap-4 shadow-lg h-full min-h-[240px] mx-auto w-full max-w-md lg:max-w-none">
                  <img
                    src={getAvatarSrc(t.gender)}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-200 text-sm leading-relaxed mb-4 line-clamp-4">
                      {t.text}
                    </p>
                    <p className="text-white font-semibold text-sm mb-1">
                      {t.name}
                    </p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* dots */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === index
                  ? "bg-cyan-400 scale-125 shadow-md shadow-cyan-500/50"
                  : "bg-gray-500/50 hover:bg-gray-400 hover:scale-110"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        {/* Arrow Buttons */}
        <div className="flex justify-center items-center gap-4 mt-8 lg:mt-12">
          <button
            onClick={goPrev}
            className="w-12 h-12 bg-[#050812] border border-cyan-500/40 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-200 transition-all duration-300 hover:scale-105"
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <button
            onClick={goNext}
            className="w-12 h-12 bg-[#050812] border border-cyan-500/40 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-200 transition-all duration-300 hover:scale-105"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
