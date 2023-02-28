import { MutableRefObject, useRef } from "react";
import Hero from "./views/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./views/Skills/Skills";
import ProjectsWrapper from "./views/Projects/ProjectsWrapper";
useRef;
const App: React.FC = () => {
  const section1: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(
    null
  );
  const section2: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(
    null
  );
  const section3: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(
    null
  );
  function scrollTo(section: MutableRefObject<HTMLDivElement>) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="App">
      <Navbar goToSectionRefArray={[section1, section2, section3]} scrollTo={scrollTo} />
      <div
        className="relative top-24 overflow-y-auto overscroll-y-contain snap-y snap-mandatory h-[calc(100vh-96px)] w-full text-white dark:text-[#858591] contain"
        id="contain"
      >
        <div ref={section1}>
          <Hero goToSectionRef={section2} scrollTo={scrollTo} />
        </div>
        <div ref={section2}>
          <Skills goToSectionRef={section3} scrollTo={scrollTo} />
          {/* scrollTo={scrollTo} goToSectionRef={projectsSection} */}
        </div>
        <div ref={section3}>
          <ProjectsWrapper />
          {/* scrollTo={scrollTo} */}
        </div>
      </div>
    </div>
  );
};

export default App;
