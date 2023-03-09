import { DiHtml5, DiCss3, DiSass, DiJavascript, DiReact } from "react-icons/di";
import { BsFilm } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";

const InformationColumn: React.FC = () => {
  return (
    <div className="bg-black dark:bg-white basis-3/4 py-14 xl:py-10 pr-10 pl-8 flex sm:flex-col gap-20 lg:gap-10  text-mainOrange">
      <div className="basis-3/4 lg:basis-2/3 flex flex-col gap-10 xl:gap-6">
        <div>
          <h1 className="text-5xl xl:text-4xl font-semibold">Mateusz Makowski</h1>
          <h2 className="text-3xl xl:text-2xl dark:text-black">Web Developer</h2>
          <div className="w-12 border-[2px] mt-2 dark:border-black"></div>
        </div>
        <div>
          <h2 className="text-4xl xl:text-3xl lg:text-2xl font-semibold">Experience</h2>
          <div className="w-full border-[1px] dark:border-black mt-2"></div>
          <div className="pt-6">
            <div className="w-60 h-fit bg-mainOrange text-black py-2 px-4">
              <h4 className="text-2xl xl:text-xl font-bold">Telkonekt Sp. z o.o.</h4>
              <h5 className="">May 2021 - August 2022</h5>
            </div>
            <h4 className="subheadertext pt-4 lg:pt-2 text-xl xl:text-lg lg:text-xl dark:text-black">
              Network Engineer
            </h4>

            <p className="text-justify text-lg xl:text-base lg:hidden dark:text-black">
              While working at Telkonekt Sp. z o.o., i was responsible for the design,
              construction and programming of Satel alarm panels, Dahua monitoring and
              videophone systems and Bosch access control systems. In addition, i prepared
              as-built documentation for photovoltaic farms and the construction and
              expansion of structured cabling
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-4xl xl:text-3xl lg:text-2xl font-semibold">Education</h2>
          <div className="w-full border-[1px] mt-2 dark:border-black"></div>
          <div className="pt-6 flex flex-col gap-4 lg:gap-6">
            <div className="flex flex-row-reverse lg:flex-col gap-5 lg:gap-2 items-center lg:items-start justify-between">
              <div className="w-60 h-fit bg-mainOrange text-black py-2 px-4 shrink-0">
                <h4 className="text-2xl xl:text-xl font-bold">Politechnika Łódzka</h4>
                <h5 className="">October 2017 - March - 2021</h5>
              </div>
              <div className="">
                <h4 className="text-xl xl:text-lg lg:text-xl dark:text-black">
                  Control Systems of inteligent buildings
                </h4>
                <p className="text-lg xl:text-base lg:hidden dark:text-black">
                  Specialization: Integration of Building Automation Systems <br></br>
                  Discipline: Automation, Electronic and Electrical Engineering.
                  <br></br>Engineer degree obtained
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse lg:flex-col gap-5 lg:gap-2 items-center justify-between lg:items-start">
              <div className="w-60 h-fit bg-mainOrange text-black py-2 px-4 shrink-0">
                <h4 className="text-2xl xl:text-xl font-bold">Technikum nr 10</h4>
                <h5 className="">September 2013 - May 2017</h5>
              </div>
              <div>
                <h4 className="text-xl xl:text-lg pt-4 lg:pt-0 lg:text-xl dark:text-black">
                  IT
                </h4>
                <p className="text-lg xl:text-base lg:hidden dark:text-black">
                  IT technician
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-1/4 lg:basis-1/3  flex flex-col gap-10">
        <div>
          <h2 className="text-4xl xl:text-3xl lg:text-2xl font-semibold">Skills</h2>
          <div className="w-full border-[1px] mt-2 dark:border-black"></div>
          <div className="pt-6 flex flex-col gap-4">
            <div
              className="flex items-center  gap-5
                    "
            >
              <div className="rounded-full bg-mainOrange p-2 flex justify-center items-center">
                <DiHtml5 className="text-4xl xl:text-3xl lg:text-2xl text-black" />
              </div>
              <h3 className="text-xl xl:text-lg lg:text-base dark:text-black">HTML5</h3>
            </div>
            <div
              className="flex items-center  gap-5
                    "
            >
              <div className="rounded-full bg-mainOrange p-2 flex justify-center items-center">
                <DiCss3 className="text-4xl xl:text-3xl lg:text-2xl text-black" />
              </div>
              <h3 className="text-xl xl:text-lg lg:text-base dark:text-black">CSS3</h3>
            </div>
            <div
              className="flex items-center gap-5
                    "
            >
              <div className="rounded-full bg-mainOrange p-2 flex justify-center items-center">
                <DiSass className="text-4xl xl:text-3xl lg:text-2xl text-black" />
              </div>
              <h3 className="text-xl xl:text-lg lg:text-base dark:text-black">Sass</h3>
            </div>
            <div
              className="flex items-center gap-5
                    "
            >
              <div className="rounded-full bg-mainOrange p-2 flex justify-center items-center">
                <DiJavascript className="text-4xl xl:text-3xl lg:text-2xl text-black" />
              </div>
              <h3 className="text-xl xl:text-lg lg:text-base dark:text-black">
                JavaScript
              </h3>
            </div>
            <div
              className="flex items-center gap-5
                    "
            >
              <div className="rounded-full bg-mainOrange p-2 flex justify-center items-center">
                <DiReact className="text-4xl xl:text-3xl lg:text-2xl text-black" />
              </div>
              <h3 className="text-xl xl:text-lg lg:text-base dark:text-black">React</h3>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-4xl xl:text-3xl lg:text-2xl font-semibold">Languages</h2>
          <div className="w-full border-[1px] mt-2 dark:border-black"></div>
          <div className="pt-6 text-xl xl:text-lg lg:text-base flex flex-col gap-4">
            <div className="flex items-center gap-5">
              <h3 className="dark:text-black">Polish</h3>
              <div className="border-2 w-full border-mainOrange">
                <div className="w-full bg-mainOrange p-1"></div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <h3 className="dark:text-black">English</h3>
              <div className="border-2 w-full border-mainOrange">
                <div className="w-3/4 bg-mainOrange p-1"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-4xl xl:text-3xl lg:text-2xl font-semibold">Interests</h2>
          <div className="w-full border-[1px] mt-2 dark:border-black"></div>
          <div className="flex gap-6  pt-6">
            <div className="flex flex-col justify-center items-center">
              <BsFilm className="text-4xl xl:text-3xl" />
              <h3 className="text-lg lg:text-base dark:text-black">Movies</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
              <TbSmartHome className="text-4xl xl:text-3xl" />
              <h3 className="text-xl lg:text-base dark:text-black">Smart Home</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationColumn;
