import { useRef, RefObject } from 'react';
import Hero from './views/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Skills from './views/Skills/Skills';
import ProjectsWrapper from './views/Projects/ProjectsWrapper';
import Resume from './views/Resume/Resume';
import Contact from './views/Contact/Contact';

const App: React.FC = () => {
  const section1: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const section2: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const section3: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const section4: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const section5: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const scrollTo = (section: RefObject<HTMLDivElement>): void => {
    if (null !== section.current) section.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="App">
      <Navbar goToSectionRefArray={[section1, section2, section3, section4, section5]} scrollTo={scrollTo} />
      <div
        className="relative top-24 sm:top-20 overflow-y-auto overscroll-y-contain snap-y snap-mandatory h-[calc(100vh-96px)] sm:h-[calc(100vh-80px)] w-full text-white dark:text-[#858591]  contain scrollbar-hide"
        id="contain">
        <div ref={section1}>
          <Hero goToSectionRefArray={[section1, section2, section3, section4, section5]} scrollTo={scrollTo} />
        </div>
        <div ref={section2}>
          <Skills goToSectionRefArray={[section1, section2, section3, section4, section5]} scrollTo={scrollTo} />
        </div>
        <div ref={section3}>
          <ProjectsWrapper
            goToSectionRefArray={[section1, section2, section3, section4, section5]}
            scrollTo={scrollTo}
          />
        </div>
        <div ref={section4}>
          <Resume scrollTo={scrollTo} goToSectionRefArray={[section1, section2, section3, section4, section5]} />
        </div>
        <div ref={section5}>
          <Contact scrollTo={scrollTo} goToSectionRefArray={[section1, section2, section3, section4, section5]} />
        </div>
      </div>
    </div>
  );
};

export default App;
