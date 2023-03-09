import GsapAnimation from '../../components/GsapAnimation/GsapAnimation';
import SectionButton from '../../components/SectionButton/SectionButton';
import { ScrollProps } from '../../features/types';
import ContactColumn from './components/ContactColumn/ContactColumn';
import InformationColumn from './components/InformationColumn/InformationColumn';

const Resume: React.FC<ScrollProps> = ({ scrollTo, goToSectionRefArray }) => {
  return (
    <section className="w-full h-[calc(100vh-96px)] snap-center bg-[#0D002B] dark:bg-[#F0F1F6] font-oswald sm:relative">
      <div className="hidden sm:block">
        <SectionButton scrollTo={scrollTo} goToSectionRef={goToSectionRefArray[2]} direction="up" />
      </div>
      <div className="relative h-auto w-[1920px] xl:w-[1440px] lg:w-[1280px] md:w-[960px] sm:w-[480px] my-0 mx-auto px-10 sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-1/2 sm:-translate-y-1/2">
        <div className="sm:hidden">
          <SectionButton scrollTo={scrollTo} goToSectionRef={goToSectionRefArray[2]} direction="up" />
        </div>
        <GsapAnimation >
          <div className="flex w-full h-[calc(100vh-96px)] sm:h-[65vh] items-center sm:items-start sm:overflow-y-scroll">
            <div className="flex w-full h-auto  sm:flex-col ">
              <ContactColumn />
              <InformationColumn />
            </div>
          </div>
        </GsapAnimation>

        <div className="sm:hidden">
          <SectionButton scrollTo={scrollTo} goToSectionRef={goToSectionRefArray[4]} direction="down" />
        </div>
      </div>

      <div className="hidden sm:block">
        <SectionButton scrollTo={scrollTo} goToSectionRef={goToSectionRefArray[4]} direction="down" />
      </div>
    </section>
  );
};

export default Resume;
