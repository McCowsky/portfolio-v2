import SkillCard from "./components/SkillCard";
import IconsData from "./features/iconsUsed";
import { MutableRefObject } from "react";
import GsapAnimation from "../../components/GsapAnimation/GsapAnimation";
import SectionButton from "../../components/SectionButton/SectionButton";

const Skills: React.FC<{
  scrollTo: (section: MutableRefObject<HTMLDivElement>) => void;
  goToSectionDownRef: MutableRefObject<HTMLDivElement | null>;
  goToSectionUpRef: MutableRefObject<HTMLDivElement | null>;
}> = ({ scrollTo, goToSectionDownRef, goToSectionUpRef }) => {
  return (
    <div className="w-full h-[calc(100vh-96px)] snap-center bg-[#0D002B] font-oswald">
      <div className="relative h-auto w-[1920px] xl:w-[1440px] my-0 mx-auto px-10 ">
        <SectionButton
          scrollTo={scrollTo}
          goToSectionRef={goToSectionUpRef}
          direction="up"
        />
        <GsapAnimation wrapperElement="div">
          <div className="flex flex-col justify-center items-center gap-20 xl:gap-10 h-[calc(100vh-96px)]">
            <div>
              <h3 className="uppercase text-center text-xl xl:text-base text-mainOrange">
                My skills progress so far
              </h3>
              <h2 className="text-6xl xl:text-4xl text-center pt-3">My Skills</h2>
            </div>
            <div className="grid justify-center my-0 mx-auto justify-items-center items-center grid-cols-3 w-fit gap-10 xl:gap-6 flex-wrap">
              {/* <SkillCard name="JavaScript" icon="SiJavascript" /> */}
              {IconsData.map((icon) => {
                return <SkillCard name={icon.title} icon={icon.icon} key={icon.title} />;
              })}
            </div>
          </div>
        </GsapAnimation>

        <SectionButton
          scrollTo={scrollTo}
          goToSectionRef={goToSectionDownRef}
          direction="down"
        />
      </div>
    </div>
  );
};

export default Skills;
