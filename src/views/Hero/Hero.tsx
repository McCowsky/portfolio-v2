import hero from '../../assets/home.svg';
import Typewriter from 'typewriter-effect';
import { TiArrowRightOutline } from 'react-icons/Ti';
import GsapAnimation from '../../components/GsapAnimation/GsapAnimation';
import SectionButton from '../../components/SectionButton/SectionButton';
import SocialIcon from '../../components/SocialIcons/SocialIcon';
import { ScrollProps } from '../../features/types';

const Hero: React.FC<ScrollProps> = ({ scrollTo, goToSectionRefArray }) => {
  return (
    <section className="w-full h-[calc(100vh-96px)] sm:h-[calc(100vh-80px)] snap-center bg-[#130538] dark:bg-[#F0F1F6] font-oswald">
      <div className="relative h-auto w-[1920px] xl:w-[1440px] lg:w-[1280px] md:w-[960px] sm:w-[480px] my-0 mx-auto px-10">
        <GsapAnimation>
          <div className="h-[calc(100vh-96px)] sm:h-[calc(100vh-80px)] flex justify-between items-center">
            <div className="flex flex-col gap-10">
              <h2 className="uppercase text-3xl xl:text-2xl text-mainOrange">Frond-End Developer</h2>
              <h1 className="text-6xl xl:text-4xl font-bold dark:text-[#F88686]">
                <Typewriter
                  options={{ cursor: '_' }}
                  onInit={typewriter => {
                    typewriter
                      .typeString(
                        " Hi There! <br/> <span className=''>I'M MATEUSZ MAKOWSKI</span> <br/> <br/> web developer",
                      )
                      .start();
                  }}
                />
              </h1>
              <h3
                className="bg-gradient-to-r from-purple-500 to-mainOrange w-fit px-16 xl:px-12 sm:px-8 py-6 xl:py-4 sm:py-3 text-2xl xl:text-lg sm:text-base font-bold rounded-full flex justify-center items-center gap-3 hover:text-[#0D002B] dark:text-[#393939]"
                onClick={() => {
                  scrollTo(goToSectionRefArray[4]);
                }}>
                Hire Me!
                <TiArrowRightOutline className="text-3xl xl:text-2xl" />
              </h3>
              <div className="pt-10 sm:pt-4">
                <h3 className="text-2xl xl:text-xl md:text-lg">Follow Me:</h3>
                <div className="flex gap-5 sm:gap-3 pt-6 md:pt-3">
                  <SocialIcon url="https://github.com/McCowsky" icon="github" />
                  <SocialIcon url="https://www.linkedin.com/in/mateusz-makowski-983735239" icon="linked" />
                </div>
              </div>
            </div>
            <div className="basis-1/2 sm:hidden">
              <img src={hero} alt="hero image" className="" />
            </div>
          </div>
        </GsapAnimation>
        <SectionButton scrollTo={scrollTo} goToSectionRef={goToSectionRefArray[1]} direction="down" />
      </div>
    </section>
  );
};

export default Hero;
