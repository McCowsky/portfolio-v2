import avatar from "../../../../assets/face.jpg";

import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

const ContactColumn: React.FC = () => {
  return (
    <div className="bg-[#F1A208] basis-1/4 py-14 xl:py-10 pl-10 pr-8 flex flex-col gap-10 text-black">
      <img
        src={avatar}
        alt="picture of me"
        className="rounded-full w-56 xl:w-48 h-auto my-0 mx-auto"
      />
      <div className="lg:hidden">
        <h2 className="text-4xl xl:text-3xl font-semibold">About Me</h2>
        <div className="w-full border-[1px] mt-2 border-black"></div>
        <p className="pt-6 text-justify	text-lg xl:text-base ">
          Highly organized and punctual graduate from the Technical University of Lodz
          seeking an entry-level position as a Front-End Developer. Worked as Network
          Engineer in IT related company Telkonekt Sp. z o.o.
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
  );
};

export default ContactColumn;
