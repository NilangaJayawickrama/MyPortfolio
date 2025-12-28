import React from "react";

function Navigation() {
    // const [nav, setNav] = useState(false)

    // const handleClick = () => setNav(!nav)

    // const handleClose = () => {
    //     setNav(false);
    // };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='w-screen bg-gray-800 bg-opacity-40 h-[60px] z-10 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='mx-4 text-3xl font-kaushan text-customTeal'>Nilanga</h1>
                </div>
                <ul className='flex text-white'>
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
            </div>

            {/* <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                <li onClick={handleClose} className='border-b-2 border-zinc-300 w-full'>
                    Home
                </li>

                <li onClick={handleClose} className='border-b-2 border-zinc-300 w-full'>
                    About Us
                </li>

                <li onClick={handleClose} className='border-b-2 border-zinc-300 w-full'>
                    Contact Us
                </li>

                <li onClick={handleClose} className='border-b-2 border-zinc-300 w-full'>
                    Services
                </li>
            </ul> */}

            {/* <div className='md:hidden mr-4' onClick={handleClick}>
                {!nav ? <MenuIcon className='w-5 text-black' /> : <div className='flex'>

                    <a
                        className="flex text-center cursor-pointer items-center mx-4 text-black hover:text-green-600"
                        type="submit"
                    >
                        <FaSignInAlt className='lg:w-5 lg:h-5 mx-2' />
                        <span className="text-sm font-medium">
                            Login
                        </span>
                    </a>

                    <a
                        className="block cursor-pointer shrink-0 rounded-lg bg-white mr-4 p-2.5 border border-gray-100 shadow-sm hover:bg-transparent hover:text-green-600 hover:border hover:border-green-600"
                    >
                        <span className="sr-only">Account</span>
                        <FaUserAlt className='lg:w-5 lg:h-5' />
                    </a>
                    <XIcon className='w-5 text-black' />
                </div>}

            </div> */}
        </div>
    )
}

export default Navigation;