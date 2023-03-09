import GsapAnimation from '../../components/GsapAnimation/GsapAnimation';
import SectionButton from '../../components/SectionButton/SectionButton';
import SocialIcon from '../../components/SocialIcons/SocialIcon';
import { ScrollProps } from '../../features/types';
import Form from './components/Form/Form';

const Contact: React.FC<ScrollProps> = ({ scrollTo, goToSectionRefArray }) => {
  return (
    <section className="w-full h-[calc(100vh-96px)] sm:h-[calc(100vh-80px)] snap-center bg-[#0D002B] dark:bg-[#F0F1F6] font-oswald">
      <div className="relative h-auto w-[1920px] xl:w-[1440px] lg:w-[1280px] md:w-[960px] sm:w-[480px] my-0 mx-auto px-10 ">
        <SectionButton scrollTo={scrollTo} goToSectionRef={goToSectionRefArray[3]} direction="up" />
        <GsapAnimation >
          <div className="flex flex-col justify-center items-center gap-20 xl:gap-10 sm:gap-6 h-[calc(100vh-96px)] sm:h-[calc(100vh-80px)]">
            <div>
              <h3 className="uppercase text-center text-xl xl:text-base text-mainOrange">I want to hear from You</h3>
              <h2 className="text-6xl xl:text-4xl sm:text-3xl text-center pt-3 dark:text-black">Contact Me!</h2>
            </div>
            <div className="flex sm:flex-col justify-center items-center gap-20 sm:gap-10">
              <Form />
              <div className="flex flex-col sm:flex-row items-start gap-10 sm:gap-6">
                <div className="flex justify-center items-center gap-5 sm:gap-2">
                  <SocialIcon url="https://www.linkedin.com/in/mateusz-makowski-983735239" icon="linked" />
                  <h4 className="text-xl sm:text-lg dark:text-black">LinkedIn</h4>
                </div>
                <div className="flex justify-center items-center gap-5 sm:gap-2">
                  <SocialIcon url="https://github.com/McCowsky" icon="github" />
                  <h4 className="text-xl sm:text-lg dark:text-black">GitHub</h4>
                </div>
                <div className="flex justify-center items-center gap-5 sm:gap-2">
                  <SocialIcon url="mailto:makowskimateusz@outlook.com" icon="email" />
                  <h4 className="text-xl sm:text-lg dark:text-black">Email</h4>
                </div>
              </div>
            </div>
          </div>
        </GsapAnimation>
      </div>
    </section>
  );
};

export default Contact;
