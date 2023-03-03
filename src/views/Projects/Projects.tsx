import ProjectCard from "./components/ProjectCard/ProjectCard";
import { bestProjects } from "./bestProjects.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import { Virtual, Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import { useState, useCallback } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import "./swiperStyles.css";
import GsapAnimation from "../../components/GsapAnimation/GsapAnimation";
import SectionButton from "../../components/SectionButton/SectionButton";
import { MutableRefObject } from "react";

const Projects: React.FC<{
  projectsData: { [key: string]: any }[];
  scrollTo: (section: MutableRefObject<HTMLDivElement>) => void;
  goToSectionDownRef: MutableRefObject<HTMLDivElement | null>;
  goToSectionUpRef: MutableRefObject<HTMLDivElement | null>;
}> = ({ projectsData, scrollTo, goToSectionDownRef, goToSectionUpRef }) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  let filteredProjects: {
    [key: string]: any;
  } = projectsData.reduce((filtered, project) => {
    bestProjects.forEach((bestProject) => {
      if (project.name === bestProject.name) {
        project.img_url = bestProject.img;
        project.languages_array = bestProject.languages;
        filtered.push(project);
      }
    });
    return filtered;
  }, []);

  return (
    <div className="w-full h-[calc(100vh-96px)] snap-center bg-[#0D002B] font-oswald">
      <div className="h-auto w-[1920px] xl:w-[1440px] my-0 mx-auto px-10 relative">
        <SectionButton
          scrollTo={scrollTo}
          goToSectionRef={goToSectionUpRef}
          direction="up"
        />
        <GsapAnimation wrapperElement="div">
          <div className=" h-[calc(100vh-96px)] my-0 mx-auto flex flex-col gap-20 xl:gap-10 justify-center items-center">
            <div>
              <h3 className="uppercase text-center text-xl xl:text-base text-mainOrange">
                Check out my recent projects
              </h3>
              <h2 className=" text-6xl xl:text-4xl text-center pt-3">Apps I've built</h2>
            </div>
            <div className="flex flex-col justify-center items-center gap-10 xl:gap-5">
              <div className="w-[1580px] xl:w-[1100px] my-0 mx-auto flex justify-center items-center gap-10">
                <button
                  onClick={handlePrevious}
                  className="text-7xl xl:text-5xl hover:text-mainOrange"
                >
                  <MdArrowBackIosNew />
                </button>
                <Swiper
                  modules={[Virtual, Mousewheel, Pagination]}
                  spaceBetween={0}
                  slidesPerView={3}
                  slidesPerGroup={3}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={setSwiperRef}
                  virtual
                  mousewheel
                  pagination={{
                    el: ".swiper-custom-pagination",
                    clickable: true,
                    type: "bullets",
                  }}
                  breakpoints={{
                    920: {
                      width: 955,
                    },
                    2000: {
                      width: 1433,
                    },
                  }}
                >
                  {filteredProjects.map(
                    (project: { [key: string]: any }, index: number) => {
                      return (
                        <SwiperSlide key={project.id} virtualIndex={index}>
                          <ProjectCard
                            name={project.name}
                            description={project.description}
                            url={project.html_url}
                            img_url={project.img_url}
                            languages={project.languages_array}
                          />
                        </SwiperSlide>
                      );
                    }
                  )}
                </Swiper>
                <button
                  onClick={handleNext}
                  className="text-7xl xl:text-5xl hover:text-mainOrange"
                >
                  <MdArrowForwardIos />
                </button>
              </div>
              <div className="swiper-custom-pagination flex justify-center text-yellow-400"></div>
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

export default Projects;
