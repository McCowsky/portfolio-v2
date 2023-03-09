import { RefObject } from 'react';
import GsapAnimation from '../../components/GsapAnimation/GsapAnimation';
import SectionButton from '../../components/SectionButton/SectionButton';
import Carousel from './components/Carousel/Carousel';

const Projects: React.FC<{
  projectsData: { [key: string]: unknown }[];
  scrollTo: (section: RefObject<HTMLDivElement>) => void;
  goToSectionRefArray: RefObject<HTMLDivElement>[];
}> = ({ projectsData, scrollTo, goToSectionRefArray }) => {
  return (
    <section className="w-full h-[calc(100vh-96px)] sm:h-[calc(100vh-80px)] snap-center bg-[#0D002B] dark:bg-[#F0F1F6] font-oswald">
      <div className="h-auto w-[1920px] xl:w-[1440px] lg:w-[1280px] md:w-[960px] sm:w-[480px] my-0 mx-auto px-10 relative">
        <SectionButton scrollTo={scrollTo} goToSectionRef={goToSectionRefArray[1]} direction="up" />
        <GsapAnimation>
          <div className=" h-[calc(100vh-96px)] sm:h-[calc(100vh-80px)] my-0 mx-auto flex flex-col gap-20 xl:gap-10 justify-center items-center">
            <div>
              <h3 className="uppercase text-center text-xl xl:text-base text-mainOrange">
                Check out my recent projects
              </h3>
              <h2 className=" text-6xl xl:text-4xl text-center pt-3 dark:text-black">Apps I've built</h2>
            </div>
            <Carousel projectsData={projectsData} />
          </div>
        </GsapAnimation>
        <SectionButton scrollTo={scrollTo} goToSectionRef={goToSectionRefArray[3]} direction="down" />
      </div>
    </section>
  );
};

export default Projects;
