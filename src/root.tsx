import AboutMe from './components/aboutme';
import Hero from './components/hero';
import Navbar from './components/navbar';

const Root = () => (
  <div className="w-screen h-full bg-slate-600 text-white relative overflow-x-hidden">
    <Hero />
    <div className="sticky top-0 left-0 right-0 -mt-20">
      <Navbar />
    </div>
    <AboutMe />
    {/* <Skills /> */}
  </div>
);
export default Root;
