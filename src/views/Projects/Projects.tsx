import ProjectCard from "./components/ProjectCard/ProjectCard";
import { bestProjects } from "./bestProjects.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import { Virtual, Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import { useState, useCallback } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import "./swiperStyles.css";
const Projects: React.FC<{ projectsData: { [key: string]: any }[] }> = ({
  projectsData,
}) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  gsap.registerPlugin(ScrollTrigger);
  const animationRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      animationRef.current,
      {
        autoAlpha: 0,
        y: -80,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.75,
        scrollTrigger: {
          scroller: "#contain",
          trigger: animationRef.current,
          start: "top 60%",
          end: "bottom 0%",
          toggleActions: "play none restart reverse",
        },
      }
    );
  }, []);

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
    <div className="w-full h-[calc(100vh-96px)] snap-center bg-[#0D002B]">
      <div className="h-auto w-[1920px] my-0 mx-auto px-10 ">
        <div
          className=" h-[calc(100vh-96px)] my-0 mx-auto flex flex-col gap-20 justify-center items-center"
          ref={animationRef}
        >
          <div>
            <h3 className="uppercase text-center text-xl text-orange-400">
              Check out my recent projects
            </h3>
            <h2 className=" text-6xl text-center pt-3">Apps I've built</h2>
          </div>
          <div className="flex flex-col justify-center items-center gap-10">
            <div className="w-[1580px] my-0 mx-auto flex justify-center items-center gap-10">
              <button onClick={handlePrevious} className="text-7xl">
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
                width={1433}
                pagination={{
                  el: ".swiper-custom-pagination",
                  clickable: true,
                  type: "bullets",
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
              <button onClick={handleNext} className="text-7xl">
                <MdArrowForwardIos />
              </button>
            </div>
            <div className="swiper-custom-pagination flex justify-center text-yellow-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
