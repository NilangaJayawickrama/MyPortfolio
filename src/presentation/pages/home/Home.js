import Introduction from "presentation/pages/home/sections/Introduction";
import AboutMe from "presentation/pages/home/sections/AboutMe";
import Skills from "presentation/pages/home/sections/Skills";
import Projects from "presentation/pages/home/sections/Projects";
import Experience from "presentation/pages/home/sections/Experience";
import Testimonials from "presentation/pages/home/sections/Testimonials";
import Blogs from "presentation/pages/home/sections/Blogs";
import ContactMe from "presentation/components/ContactMe";

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
