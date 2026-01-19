import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Experience = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedExp, setSelectedExp] = useState(null);

  const experiences = [
    {
      title: "Software Engineer",
      company: "INIVOS Technology Pvt Ltd",
      period: "April 2023 - April 2025",
      description: [
        "Contributed to the development and maintenance of scalable web applications as a Full Stack Developer, with a focus on modern frontend development practices.",
        "Collaborated with cross-functional Agile teams including UI/UX designers, product owners, and QA engineers to build clean and functional UIs.",
        "Applied JavaScript best practices in UI implementation, with exposure to React patterns and component-driven architecture.",
        "Wrote maintainable code, documented core logic, and conducted internal code reviews for quality assurance.",
        "Practiced continuous learning, consistently integrating the latest frontend trends and coding standards into daily workflows.",
        "Gained experience in code evaluation, bug diagnosis, and technical explanations during peer review and team discussions.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Electrily Pvt Ltd",
      period: "September 2021 - April 2023",
      description: [
        "Engineered end-to-end frontend and backend solutions using Angular and Sails.js, while maintaining strong JavaScript fundamentals across projects.",
        "Took initiative in evaluating frontend code, optimizing component logic, and writing reusable UI elements based on modern development principles.",
        "Worked with cloud infrastructure (Google Cloud Platform) and managed relational databases using PostgreSQL for full-stack efficiency.",
        "Focused on improving UI/UX responsiveness and code clarity, often breaking down technical decisions to both technical and non-technical stakeholders.",
        "Strengthened abilities in technical writing, testing, and documentation—skills highly transferable to AI model training and code evaluation work",
      ],
    },
  ];

  const openModal = (exp) => {
    setSelectedExp(exp);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <section className="pt-[70px] py-12 md:py-16 bg-[#0b0f18]">
      <div className="container mx-auto">
        {/* Topic */}
        <p className="text-xs sm:text-sm lg:text-base font-semibold tracking-[0.2em] uppercase text-gray-300 mb-2">
          Experience
        </p>

        <div className="row g-5">
          {/* LEFT */}
          <div className="col-lg-7">
            <div className="position-relative">
              {experiences.map((exp, index) => (
                <div key={index} className="position-relative mb-4">
                  {/* Card */}
                  <div
                    className="bg-[#050812] border border-cyan-500/40 rounded-lg p-4 hover:bg-cyan-500/5 transition-all duration-300 position-relative overflow-hidden cursor-pointer ml-5"
                    onClick={() => openModal(exp)}
                  >
                    <div className="row align-items-center">
                      {/* <h5 className="text-white font-semibold mb-1">
                        {exp.title}
                      </h5> */}

                      <div
                        className="w-100 d-flex flex-column flex-md-row justify-content-between align-items-md-center"
                        style={{ minHeight: "2px" }}
                      >
                        <div className="d-flex align-items-center mb-md-0">
                          <h5 className="text-white font-semibold mb-0 me-md-3 flex-shrink-0">
                            {exp.title}
                          </h5>
                        </div>
                        <p className="text-gray-400 text-xs mb-0 hidden md:block">
                          {exp.period}
                        </p>
                      </div>

                      <div className=" text-start text-xs w-100 mb-1">
                        <div className="d-flex flex-column flex-md-row justify-content-between">
                          <span className="text-cyan-300">{exp.company}</span>
                          <span className="text-gray-400 mt-1 md:hidden">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm mb-0 line-clamp-2">
                        {exp.description.length > 120
                          ? `${exp.description.substring(0, 120)}...`
                          : exp.description}
                        {exp.description.length > 120 && (
                          <button
                            className="text-cyan-400 hover:text-white text-xs font-medium ms-2 p-0 bg-transparent border-0"
                            onClick={(e) => {
                              e.stopPropagation();
                              openModal(exp);
                            }}
                          >
                            Show more →
                          </button>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Vertical line */}
              <div className="position-absolute bg-gradient-to-b from-transparent via-cyan-500/60 to-transparent w-[2px] left-2 top-2 bottom-2" />
            </div>
          </div>

          {/* RIGHT: Image (hidden on mobile) */}
          <div className="col-lg-5 justify-center ">
            <div className="row flex justify-end w-full lg:w-100">
              <img
                src="/images/experience-image.png"
                alt="About me"
                className="w-44 sm:w-52 md:w-64 lg:w-150 xl:w-200 max-h-200 object-contain"
              />
            </div>

            {/* Buttons */}
            <div className="mt-10 justify-center flex items-center gap-6 ">
              <a
                href="https://drive.google.com/uc?export=download&id=1z1sZjph1kQXusgfYhRrszRHOnbn2XI1b"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
              >
                <button className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-cyan-500 hover:border-cyan-300 hover:shadow-2xl hover:shadow-cyan-600/50 bg-cyan-400 font-semibold text-black px-10 py-3 rounded-full flex items-center border-4 border-cyan-400 overflow-hidden gap-2 hover:text-white relative group">
                  <span className="relative z-10">Download CV</span>
                  <span className="group-hover:-rotate-12 transition-transform duration-300">
                    ⬇️
                  </span>

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -rotate-2 group-hover:animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
      >
        <Modal.Header closeButton className="bg-[#050812] border-0">
          <Modal.Title className="text-white text-xl font-bold">
            {selectedExp?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-[#050812] border border-cyan-500/40 p-4 max-h-[60vh] overflow-y-auto">
          <p className="text-gray-300 text-sm leading-relaxed">
            {selectedExp?.description}
          </p>
        </Modal.Body>
        <Modal.Footer className="bg-gray-900/50 border-t border-gray-800 justify-content-center">
          <Button
            variant="link"
            className="text-cyan-400 hover:text-white px-0"
            onClick={() => setShowModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Experience;
