import React from 'react';
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Testimonials from "./Testimonials";
import Blogs from "./Blogs";
import ContactMe from "./ContactMe";

const Home = () => {
    return (
        <>
            <section id='introduction'>
                <Introduction />
            </section>

            <section id='aboutMe'>
                <AboutMe />
            </section>

            <section id='skills'>
                <Skills />
            </section>

            <section id='projects'>
                <Projects />
            </section>

            <section id='experience'>
                <Experience />
            </section>

            <section id='testimonials'>
                <Testimonials />
            </section>

            <section id='blogs'>
                <Blogs />
            </section>

            <section id='contactMe'>
                <ContactMe />
            </section>
        </>

    );
}

export default Home;
