import { FiGithub } from "react-icons/Fi";
import { FiMonitor } from "react-icons/Fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProjectCard: React.FC<{
  name: string;
  description: string;
  url: string;
  img_url: string;
  languages: string[];
}> = ({ name, description, url, img_url, languages }) => {
  return (
    <div className="bg-[#14143A] w-[400px] xl:w-[285px] pt-10 xl:pt-8 pb-14 xl:pb-10 px-10 xl:px-8 rounded-2xl xl:rounded-xl font-oswald">
      <img src={img_url} alt="" className="rounded-xl" />
      <div className="flex pt-8 xl:pt-6 text-sm xl:text-xs gap-5">
        {languages.map((language) => {
          return <h4 key={language}>{language}</h4>;
        })}
      </div>
      <h3 className="pt-4 xl:pt-2 text-mainOrange text-2xl xl:text-xl">{name}</h3>
      <p className="pt-8 xl:pt-5 text-lg xl:text-sm">{description}</p>
      <div className="upeercase flex justify-between pt-12 xl:pt-8 text-gray-300 text-sm xl:text-xs">
        <h4>
          <a href="" target="_blank" className="flex items-center gap-2">
            <FiMonitor /> Live demo
          </a>
        </h4>
        <h4>
          <a href={url} target="_blank" className="flex items-center gap-2">
            <FiGithub />
            Source code
          </a>
        </h4>
      </div>
    </div>
  );
};

export default ProjectCard;
