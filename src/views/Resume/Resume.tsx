import { MutableRefObject } from "react";
import GsapAnimation from "../../components/GsapAnimation/GsapAnimation";
import SectionButton from "../../components/SectionButton/SectionButton";
import avatar from "../../assets/face.jpg";
import { DiHtml5, DiCss3, DiSass, DiJavascript, DiReact } from "react-icons/di";
import { BsFilm } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Resume: React.FC<{
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
          <div className="flex w-full h-[calc(100vh-96px)] items-center">
            <div className="flex w-full h-fit">
              <div className="bg-[#F1A208] basis-1/4 py-14 xl:py-10 pl-10 pr-8 flex flex-col gap-10 text-black">
                <img
                  src={avatar}
                  alt="picture of me"
                  className="rounded-full w-56 xl:w-48 h-auto my-0 mx-auto"
                />
                <div>
                  <h2 className="text-4xl xl:text-3xl font-semibold">About Me</h2>
                  <div className="w-full border-[1px] mt-2 border-black"></div>
                  <p className="pt-6 text-justify	text-lg xl:text-base">
                    Highly organized and punctual graduate from the Technical University
                    of Lodz seeking an entry-level position as a Front-End Developer.
                    Worked as Network Engineer in IT related company Telkonekt Sp. z o.o.
                  </p>
                </div>
                <div>
                  <h2 className="text-4xl xl:text-3xl font-semibold">Follow Me</h2>
                  <div className="w-full border-[1px] mt-2 border-black"></div>
                  <div className="pt-6 text-lg xl:text-base">
                    <div className="flex items-center gap-2">
                      <AiOutlineLinkedin className="text-4xl xl:text-3xl" />
                      <a
                        href="https://www.linkedin.com/in/mateusz-makowski-983735239"
                        target="_blank"
                      >
                        linkedin.com/mateusz-makowski
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <AiOutlineGithub className="text-4xl xl:text-3xl" />
                      <a href="https://github.com/McCowsky" target="_blank">
                        github.com/mccowsky
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-4xl xl:text-3xl font-semibold">Contact</h2>
                  <div className="w-full border-[1px] mt-2 border-black"></div>
                  <div className="pt-6 text-lg xl:text-base">
                    <div className="flex items-center gap-2">
                      <AiOutlineMail className="text-4xl xl:text-3xl" />
                      <a href="matilto:makowskimateusz@outlook.com" target="_blank">
                        makowskimateusz@outlook.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <AiOutlinePhone className="text-4xl xl:text-3xl" />
                      <h3>730169936</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-black basis-3/4 py-14 xl:py-10 pr-10 pl-8 flex gap-20 text-mainOrange">
                <div className="basis-3/4 flex flex-col gap-10 xl:gap-6">
                  <div>
                    <h1 className="text-5xl xl:text-4xl font-semibold">
                      Mateusz Makowski
                    </h1>
                    <h2 className="text-3xl xl:text-2xl">Web Developer</h2>
                    <div className="w-12 border-[2px] mt-2"></div>
                  </div>
                  <div>
                    <h2 className="text-4xl xl:text-3xl font-semibold">Experience</h2>
                    <div className="w-full border-[1px] mt-2"></div>
                    <div className="pt-6">
                      <div className="w-60 h-fit bg-mainOrange text-black py-2 px-4">
                        <h4 className="text-2xl xl:text-xl font-bold">
                          Telkonekt Sp. z o.o.
                        </h4>
                        <h5 className="">May 2021 - August 2022</h5>
                      </div>
                      <h4 className="subheadertext pt-4 text-xl xl:text-lg">
                        Network Engineer
                      </h4>

                      <p className="text-justify text-lg xl:text-base">
                        While working at Telkonekt Sp. z o.o., i was responsible for the
                        design, construction and programming of Satel alarm panels, Dahua
                        monitoring and videophone systems and Bosch access control
                        systems. In addition, i prepared as-built documentation for
                        photovoltaic farms and the construction and expansion of
                        structured cabling
                      </p>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-4xl xl:text-3xl font-semibold">Education</h2>
                    <div className="w-full border-[1px] mt-2"></div>
                    <div className="pt-6 flex flex-col gap-4">
                      <div className="flex flex-row-reverse gap-5 items-center justify-between">
                        <div className="w-60 h-fit bg-mainOrange text-black py-2 px-4 shrink-0">
                          <h4 className="text-2xl xl:text-xl font-bold">
                            Politechnika Łódzka
                          </h4>
                          <h5 className="">October 2017 - March - 2021</h5>
                        </div>
                        <div className="">
                          <h4 className="text-xl xl:text-lg ">
                            Control Systems of inteligent buildings
                          </h4>
                          <p className="text-lg xl:text-base">
                            Specialization: Integration of Building Automation Systems{" "}
                            <br></br>
                            Discipline: Automation, Electronic and Electrical Engineering.
                            <br></br>Engineer degree obtained
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row-reverse gap-5 items-center">
                        <div className="w-60 h-fit bg-mainOrange text-black py-2 px-4 shrink-0">
                          <h4 className="text-2xl xl:text-xl font-bold">
                            Technikum nr 10
                          </h4>
                          <h5 className="">September 2013 - May 2017</h5>
                        </div>
                        <div>
                          <h4 className="text-xl xl:text-lg pt-4">IT </h4>
                          <p className="text-lg xl:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptas sunt, doloremque nulla sequi, ab distinctio
                            repudiandae praesentium debitis porro, eligendi id accusamus
                            aliquam quis sit. Praesentium similique quis minima error.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="basis-1/4 flex flex-col gap-10">
                  <div>
                    <h2 className="text-4xl xl:text-3xl font-semibold">Skills</h2>
                    <div className="w-full border-[1px] mt-2"></div>
                    <div className="pt-6 flex flex-col gap-4">
                      <div
                        className="flex items-center  gap-5
                    "
                      >
                        <div className="rounded-full bg-mainOrange p-2 flex justify-center items-center">
                          <DiHtml5 className="text-4xl xl:text-3xl text-black" />
                        </div>
                        <h3 className="text-xl xl:text-lg">HTML5</h3>
                      </div>
                      <div
                        className="flex items-center  gap-5
                    "
                      >
                        <div className="rounded-full bg-mainOrange p-2 flex justify-center items-center">
                          <DiCss3 className="text-4xl xl:text-3xl text-black" />
                        </div>
                        <h3 className="text-xl xl:text-lg">CSS3</h3>
                      </div>
                      <div
                        className="flex items-center gap-5
                    "
                      >
                        <div className="rounded-full bg-mainOrange p-2 flex justify-center items-center">
                          <DiSass className="text-4xl xl:text-3xl text-black" />
                        </div>
                        <h3 className="text-xl xl:text-lg">Sass</h3>
                      </div>
                      <div
                        className="flex items-center gap-5
                    "
                      >
                        <div className="rounded-full bg-mainOrange p-2 flex justify-center items-center">
                          <DiJavascript className="text-4xl xl:text-3xl text-black" />
                        </div>
                        <h3 className="text-xl xl:text-lg">JavaScript</h3>
                      </div>
                      <div
                        className="flex items-center gap-5
                    "
                      >
                        <div className="rounded-full bg-mainOrange p-2 flex justify-center items-center">
                          <DiReact className="text-4xl xl:text-3xl text-black" />
                        </div>
                        <h3 className="text-xl xl:text-lg">React</h3>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-4xl xl:text-3xl font-semibold">Languages</h2>
                    <div className="w-full border-[1px] mt-2"></div>
                    <div className="pt-6 text-xl xl:text-lg flex flex-col gap-4">
                      <div className="flex items-center gap-5">
                        <h3>Polish</h3>
                        <div className="border-2 w-full border-mainOrange">
                          <div className="w-full bg-mainOrange p-1"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-5">
                        <h3>English</h3>
                        <div className="border-2 w-full border-mainOrange">
                          <div className="w-3/4 bg-mainOrange p-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <h2 className="text-4xl xl:text-3xl font-semibold">Interests</h2>
                    <div className="w-full border-[1px] mt-2"></div>
                    <div className="flex gap-6  pt-6">
                      <div className="flex flex-col justify-center items-center">
                        <BsFilm className="text-4xl xl:text-3xl" />
                        <h3 className="text-lg">Movies</h3>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <TbSmartHome className="text-4xl xl:text-3xl" />
                        <h3 className="text-xl">Smart Home</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

export default Resume;
