import SkillCard from "./components/SkillCard";
import IconsData from "./features/iconsUsed";
import GsapAnimation from "../../components/GsapAnimation/GsapAnimation";
import SectionButton from "../../components/SectionButton/SectionButton";
import { ScrollProps } from "../../features/types";

const Skills: React.FC<ScrollProps> = ({ scrollTo, goToSectionRefArray }) => {
  return (
    <section className="w-full h-[calc(100vh-96px)] sm:h-[calc(100vh-80px)] snap-center bg-[#0D002B] dark:bg-[#F0F1F6] font-oswald">
      <div className="relative h-auto w-[1920px] xl:w-[1440px] lg:w-[1280px] md:w-[960px] sm:w-[480px] my-0 mx-auto px-10">
        <SectionButton
          scrollTo={scrollTo}
          goToSectionRef={goToSectionRefArray[0]}
          direction="up"
        />
        <GsapAnimation >
          <div className="flex flex-col justify-center items-center gap-20 xl:gap-10 h-[calc(100vh-96px)] sm:h-[calc(100vh-80px)]">
            <div>
              <h3 className="uppercase text-center text-xl xl:text-base text-mainOrange">
                My skills progress so far
              </h3>
              <h2 className="text-6xl xl:text-4xl text-center pt-3 dark:text-black">
                My Skills
              </h2>
            </div>
            <div className="grid justify-center my-0 mx-auto justify-items-center items-center grid-cols-3 w-fit gap-10 xl:gap-6 sm:gap-4 flex-wrap">
              {IconsData.map((icon) => {
                return <SkillCard name={icon.title} icon={icon.icon} key={icon.title} />;
              })}
            </div>
          </div>
        </GsapAnimation>

        <SectionButton
          scrollTo={scrollTo}
          goToSectionRef={goToSectionRefArray[2]}
          direction="down"
        />
      </div>
    </section>
  );
};

export default Skills;
