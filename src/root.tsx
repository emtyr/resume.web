import AboutMe from './components/aboutme';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Experience from './components/experience';
import Skills from './components/skills';
import Footer from './components/footer/footer';
import Contact from './components/Contact';

const Root = () => (
  <div className="w-screen h-full text-white relative overflow-x-hidden bg-[#1c202b] scroll-py-20">
    <Hero />
    <div className="sticky top-0 left-0 right-0 -mt-20 z-50">
      <Navbar />
    </div>
    <AboutMe />
    <Skills />
    <Experience />
    <Contact />
    <Footer />
  </div>
);
export default Root;
