import SkillCard from "./components/SkillCard";
import IconsData from "./features/iconsUsed";
import { SlArrowDownCircle } from "react-icons/Sl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const Skills: React.FC<{ scrollTo: any; goToSectionRef: any }> = ({
  scrollTo,
  goToSectionRef,
}) => {
  const animationRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      animationRef.current,
      {
        autoAlpha: 0,
        y: -80,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        scrollTrigger: {
          scroller: "#contain",
          trigger: animationRef.current,
          start: "top 60%",
          end: "bottom 0%",
          toggleActions: "play none restart reverse",
        },
      }
    );
  }, []);
  return (
    <div className="w-full h-[calc(100vh-96px)] snap-center bg-[#0D002B]">
      <div className="relative h-auto w-[1920px] my-0 mx-auto px-10 ">
        <div
          className="flex flex-col justify-center items-center gap-20 h-[calc(100vh-96px)]"
          ref={animationRef}
        >
          <div>
            <h3 className="uppercase text-center text-xl text-orange-400">
              My skills progress so far
            </h3>
            <h2 className="text-6xl text-center pt-3">My Skills</h2>
          </div>
          <div className="grid justify-center my-0 mx-auto justify-items-center items-center grid-cols-3 w-fit gap-10 flex-wrap">
            {/* <SkillCard name="JavaScript" icon="SiJavascript" /> */}
            {IconsData.map((icon) => {
              return <SkillCard name={icon.title} icon={icon.icon} key={icon.title} />;
            })}
          </div>
        </div>
        <SlArrowDownCircle
          className="absolute bottom-16 left-1/2 -translate-x-1/2 text-6xl z-10"
          onClick={() => scrollTo(goToSectionRef)}
        />
      </div>
    </div>
  );
};

export default Skills;
