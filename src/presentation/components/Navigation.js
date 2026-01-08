import React, { useState } from "react";

function Navigation() {
    const [navOpen, setNavOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setNavOpen(false);
        }
    };

    const navItems = [
        { id: "introduction", label: "Home" },
        { id: "aboutMe", label: "About Me" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "experience", label: "Experience" },
        { id: "testimonials", label: "Testimonials" },
        { id: "blogs", label: "Blogs" },
        { id: "contactMe", label: "Contact Me" },
    ];

    return (
        <nav className='w-screen bg-gray-800/60 bg-opacity-40 h-[60px] z-50 fixed drop-shadow-lg backdrop-blur'>
            <div className='px-4 flex justify-between items-center w-full h-full max-w-6xl mx-auto'>

                {/* Logo */}
                <div className='flex items-center'>
                    <h1 className='mx-4 text-2xl lg:text-3xl font-kaushan text-customTeal'>
                        NJ
                    </h1>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex text-white">
                    {navItems.map((item) => (
                        <li
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="mx-4 cursor-pointer hover:text-customTeal transition-colors"
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger */}
                <button
                    className="lg:hidden pr-6 text-white focus:outline-none"
                    onClick={() => setNavOpen((prev) => !prev)}
                    aria-label="Toggle navigation"
                >
                    {/* Simple icon; you can replace with an SVG or react-icons */}
                    {navOpen ? (
                        <span className="text-3xl">&times;</span> // X
                    ) : (
                        <span className="text-2xl">&#9776;</span> // ☰
                    )}
                </button>
            </div>

            {/* Dropdown menu */}
            {navOpen && (
                <ul className="lg:hidden bg-gray-900/95 text-white w-full px-4 pb-4 space-y-2 border-t border-gray-700">
                    {navItems.map((item) => (
                        <li
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="py-2 pl-3 border-b border-gray-800 first:pt-5 last:border-b-0 cursor-pointer hover:text-customTeal transition-colors"
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}

export default Navigation;