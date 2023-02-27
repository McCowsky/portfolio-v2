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
      <div className="bg-[#14143A] w-[400px] pt-10 pb-14 px-10 rounded-2xl">
        <img src={img_url} alt="" className="rounded-xl" />
        <div className="flex pt-8 text-sm gap-5">
          {languages.map((language) => {
            return <h4 key={language}>{language}</h4>;
          })}
        </div>
        <h3 className="pt-4 text-orange-400 text-2xl">{name}</h3>
        <p className="pt-8 text-lg">{description}</p>
        <div className="upeercase flex justify-between pt-12 text-gray-300 text-sm">
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
