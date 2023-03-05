import { MutableRefObject, useRef } from "react";
import Hero from "./views/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./views/Skills/Skills";
import ProjectsWrapper from "./views/Projects/ProjectsWrapper";
import Resume from "./views/Resume/Resume";
import Contact from "./views/Contact/Contact";
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
  const section4: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(
    null
  );
  const section5: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(
    null
  );
  function scrollTo(section: MutableRefObject<HTMLDivElement>) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="App">
      <Navbar
        goToSectionRefArray={[section1, section2, section3, section4]}
        scrollTo={scrollTo}
      />
      <div
        className="relative top-24 overflow-y-auto overscroll-y-contain snap-y snap-mandatory h-[calc(100vh-96px)] w-full text-white dark:text-[#858591]  contain "
        id="contain"
      >
        <div ref={section1}>
          <Hero goToSectionDownRef={section2} scrollTo={scrollTo} />
        </div>
        <div ref={section2}>
          <Skills
            goToSectionDownRef={section3}
            goToSectionUpRef={section1}
            scrollTo={scrollTo}
          />
        </div>
        <div ref={section3}>
          <ProjectsWrapper
            goToSectionDownRef={section4}
            goToSectionUpRef={section2}
            scrollTo={scrollTo}
          />
        </div>
        <div ref={section4}>
          <Resume
            scrollTo={scrollTo}
            goToSectionDownRef={section1}
            goToSectionUpRef={section3}
          />
        </div>
        <div ref={section5}>
          <Contact
            scrollTo={scrollTo}
            goToSectionDownRef={section1}
            goToSectionUpRef={section4}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
