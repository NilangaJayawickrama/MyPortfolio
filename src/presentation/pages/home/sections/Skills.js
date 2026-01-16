import React, { useState } from "react";

const Skills = () => {
  const [openCategories, setOpenCategories] = useState([0]);

  const skillCategories = [
    {
      title: "Programming Languages",
      type: "grid",
      items: ["JavaScript", "TypeScript", "Python", "Java"],
    },
    {
      title: "Database Management",
      type: "grid",
      items: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      title: "Cloud Services",
      type: "grid",
      items: ["AWS", "Vercel", "Netlify"],
    },
    {
      title: "Other",
      type: "grid",
      items: ["Git", "Docker", "Figma", "CI/CD"],
    },
  ];

  const toggleCategory = (index) => {
    setOpenCategories((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="pt-[70px] py-12 md:py-16 bg-[#0b0f18]">
      <div className="w-[90%] max-w-7xl mx-auto">
          {/* Topic */}
          <p className="text-center lg:text-start text-xs sm:text-sm lg:text-base font-semibold tracking-[0.2em] uppercase text-gray-300 mb-4">
            Skills
          </p>

          <div className="space-y-2 w-full">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-xl overflow-hidden hover:bg-gray-800/50 transition-all duration-300 group"
              >
                {/* Header */}
                <button
                  onClick={() => toggleCategory(index)}
                  className="w-full text-left p-3 md:p-4 bg-gray-900/70 hover:bg-cyan-500/10 text-white font-bold text-sm md:text-base lg:text-xl xl:text-2xl transition-all duration-300 flex items-center justify-between"
                >
                  <span className="text-cyan-400 group-hover:text-cyan-300">
                    {category.title}
                  </span>
                  <span
                    className={`transition-transform duration-300 ${
                      openCategories.includes(index) ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {/* Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openCategories.includes(index)
                      ? "max-h-96 opacity-100 py-6 px-6 md:px-8"
                      : "max-h-0 opacity-0 py-0 px-0"
                  }`}
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`p-3 md:p-4 rounded-lg border border-cyan-500/30 bg-gray-800/50 hover:bg-cyan-500/20 transition-all duration-200 text-xs md:text-sm font-medium text-white ${
                          category.type === "grid"
                            ? "text-center"
                            : "flex items-center gap-3"
                        }`}
                      >
                        {category.type === "list" && (
                          <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                        )}
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Skills;
