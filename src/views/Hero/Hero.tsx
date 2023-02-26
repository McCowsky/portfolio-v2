import hero from "../../assets/home.svg";
import Typewriter from "typewriter-effect";
import { FiLinkedin } from "react-icons/Fi";
import { FiGithub } from "react-icons/Fi";
import { TiArrowRightOutline } from "react-icons/Ti";
import { SlArrowDownCircle } from "react-icons/Sl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC<{ scrollTo: any; goToSectionRef: any }> = ({
  scrollTo,
  goToSectionRef,
}) => {
  const animationRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      animationRef.current,
      {
        autoAlpha: 0,
        y: -40,
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
          toggleActions: "play none restart reveser",
        },
      }
    );
  }, []);

  return (
    <div className="w-full h-[calc(100vh-96px)] snap-center	 bg-[#130538] dark:bg-[#F0F1F6]">
      <div className="relative h-auto w-[1920px] my-0 mx-auto px-10 " ref={animationRef}>
        <div className="h-[calc(100vh-96px)] flex justify-between items-center">
          <div className="flex flex-col gap-10">
            <h2 className="uppercase font-roboto text-3xl text-orange-400">
              Frond-End Developer
            </h2>
            <h1 className="text-6xl font-bold dark:text-[#F88686]">
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
              className="bg-gradient-to-r from-purple-500 to-orange-400 w-fit px-16 py-6 text-2xl font-bold rounded-full flex justify-center items-center gap-3"
            >
              Hire Me!
              <TiArrowRightOutline className="text-3xl" />
            </a>
            <div className="pt-10">
              <h3 className="text-2xl">Follow Me:</h3>
              <div className="flex gap-5 pt-6">
                <div className="border rounded-full w-20 h-20">
                  <a href="" className="flex justify-center items-center w-full h-full ">
                    <FiGithub className="text-[42px]" />
                  </a>
                </div>
                <div className="border rounded-full w-20 h-20 flex justify-center items-center">
                  <a href="" className="flex justify-center items-center w-full h-full ">
                    <FiLinkedin className="text-5xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            <img src={hero} alt="hero image" className="" />
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

export default Hero;
