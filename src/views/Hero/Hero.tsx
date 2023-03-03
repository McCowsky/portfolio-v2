import hero from "../../assets/home.svg";
import Typewriter from "typewriter-effect";
import { FiLinkedin } from "react-icons/Fi";
import { FiGithub } from "react-icons/Fi";
import { TiArrowRightOutline } from "react-icons/Ti";
import { MutableRefObject } from "react";
import GsapAnimation from "../../components/GsapAnimation/GsapAnimation";
import SectionButton from "../../components/SectionButton/SectionButton";

const Hero: React.FC<{
  scrollTo: (section: MutableRefObject<HTMLDivElement>) => void;
  goToSectionDownRef: MutableRefObject<HTMLDivElement | null>;
}> = ({ scrollTo, goToSectionDownRef }) => {
  return (
    <div className="w-full h-[calc(100vh-96px)] snap-center	 bg-[#130538] dark:bg-[#F0F1F6] font-oswald">
      <div className="relative h-auto w-[1920px] xl:w-[1440px] my-0 mx-auto px-10 ">
        <GsapAnimation wrapperElement="div">
          <div className="h-[calc(100vh-96px)] flex justify-between items-center">
            <div className="flex flex-col gap-10">
              <h2 className="uppercase text-3xl xl:text-2xl text-mainOrange">
                Frond-End Developer
              </h2>
              <h1 className="text-6xl xl:text-4xl font-bold dark:text-[#F88686]">
                <Typewriter
                  options={{ cursor: "_" }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        " Hi There! <br/> <span className=''>I'M MATEUSZ MAKOWSKI</span> <br/> <br/> web developer"
                      )
                      .start();
                  }}
                />
              </h1>
              <a
                href=""
                className="bg-gradient-to-r from-purple-500 to-mainOrange w-fit px-16 xl:px-12 py-6 xl:py-4 text-2xl xl:text-lg font-bold rounded-full flex justify-center items-center gap-3"
              >
                Hire Me!
                <TiArrowRightOutline className="text-3xl xl:text-2xl" />
              </a>
              <div className="pt-10">
                <h3 className="text-2xl xl:text-xl">Follow Me:</h3>
                <div className="flex gap-5 pt-6">
                  <div className="border rounded-full w-20 xl:w-16 h-20 xl:h-16 flex justify-center items-center">
                    <a
                      href=""
                      className="flex justify-center items-center w-full h-full "
                    >
                      <FiGithub className="text-[42px] xl:text-3xl hover:text-mainOrange" />
                    </a>
                  </div>
                  <div className="border rounded-full w-20 xl:w-16 h-20 xl:h-16 flex justify-center items-center">
                    <a
                      href=""
                      className="flex justify-center items-center w-full h-full "
                    >
                      <FiLinkedin className="text-5xl xl:text-3xl hover:text-mainOrange" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-1/2">
              <img src={hero} alt="hero image" className="" />
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

export default Hero;
