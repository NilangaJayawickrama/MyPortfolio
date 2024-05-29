import React, { useState } from "react";

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            setIsMenuOpen(false);
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='w-screen bg-gray-800 bg-opacity-40 h-[60px] z-10 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='mx-4 text-3xl font-kaushan text-customTeal'>Nilanga</h1>
                </div>
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                {/* Header elements for large screens */}
                {!isMenuOpen && (
                    <ul className='lg:flex hidden text-white'>
                        <li onClick={() => scrollToSection('introduction')} className='mx-4 cursor-pointer hover:text-customTeal'>
                            Home
                        </li>
                        <li onClick={() => scrollToSection('aboutMe')} className='mx-4 cursor-pointer relative group hover:text-customTeal'>
                            About Me
                        </li>
                        <li onClick={() => scrollToSection('skills')} className='mx-4 cursor-pointer relative group hover:text-customTeal'>
                            Skills
                        </li>
                        <li onClick={() => scrollToSection('projects')} className='mx-4 cursor-pointer relative group hover:text-customTeal'>
                            Projects
                        </li>
                        <li onClick={() => scrollToSection('experience')} className='mx-4 cursor-pointer relative group hover:text-customTeal'>
                            Experience
                        </li>
                        <li onClick={() => scrollToSection('testimonials')} className='mx-4 cursor-pointer relative group hover:text-customTeal'>
                            Testimonials
                        </li>
                        <li onClick={() => scrollToSection('blogs')} className='mx-4 cursor-pointer relative group hover:text-customTeal'>
                            Blogs
                        </li>
                        <li onClick={() => scrollToSection('contactMe')} className='mx-4 cursor-pointer relative group hover:text-customTeal'>
                            Contact Me
                        </li>
                    </ul>
                )}
                {/* End of the header elements for large screens */}

                {/* Dropdown menu for small screens */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-[60px] right-0 left-0 bg-gray-800">
                        <ul className="flex flex-col text-white">
                            <li onClick={() => scrollToSection('introduction')} className='mx-4 my-2 cursor-pointer hover:text-customTeal'>
                                Home
                            </li>
                            <li onClick={() => scrollToSection('aboutMe')} className='mx-4 my-2 cursor-pointer hover:text-customTeal'>
                                About Me
                            </li>
                            <li onClick={() => scrollToSection('skills')} className='mx-4 my-2 cursor-pointer hover:text-customTeal'>
                                Skills
                            </li>
                            <li onClick={() => scrollToSection('projects')} className='mx-4 my-2 cursor-pointer hover:text-customTeal'>
                                Projects
                            </li>
                            <li onClick={() => scrollToSection('experience')} className='mx-4 my-2 cursor-pointer hover:text-customTeal'>
                                Experience
                            </li>
                            <li onClick={() => scrollToSection('testimonials')} className='mx-4 my-2 cursor-pointer hover:text-customTeal'>
                                Testimonials
                            </li>
                            <li onClick={() => scrollToSection('blogs')} className='mx-4 my-2 cursor-pointer hover:text-customTeal'>
                                Blogs
                            </li>
                            <li onClick={() => scrollToSection('contactMe')} className='mx-4 my-2 cursor-pointer hover:text-customTeal'>
                                Contact Me
                            </li>
                        </ul>
                    </div>
                )}
                {/* End of dropdown menu for small screens */}

            </div>
        </div>
    )
}

export default Navigation;