/* eslint-disable @typescript-eslint/no-explicit-any */
import ProjectCard from '../ProjectCard/ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Mousewheel, Pagination } from 'swiper';
import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md';
import { useState, useCallback } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import { bestProjects } from './bestProjects.json';

import 'swiper/css';
import 'swiper/css/bundle';
import './swiperStyles.css';

const Carousel: React.FC<{ projectsData: { [key: string]: unknown }[] }> = ({ projectsData }) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  const filteredProjects: {
    [key: string]: unknown;
  }[] = projectsData.reduce(
    (
      filtered: {
        [key: string]: unknown;
      }[],
      project: { [key: string]: unknown },
    ) => {
      bestProjects.forEach(bestProject => {
        if (project.name === bestProject.name) {
          project.img_url = bestProject.img;
          project.languages_array = bestProject.languages;
          filtered.push(project);
        }
      });
      return filtered;
    },
    [],
  );

  return (
    <div className="flex flex-col justify-center items-center gap-10 xl:gap-5">
      <div className="w-[1580px] xl:w-[1100px] lg:w-[1100px] md:w-[760px] sm:w-[250px] my-0 mx-auto flex sm:flex-col sm:overflow-hidden justify-center items-center gap-10 sm:gap-5">
        <button onClick={handlePrevious} className="text-7xl xl:text-5xl hover:text-mainOrange dark:text-black">
          <MdArrowBackIosNew />
        </button>
        <Swiper
          modules={[Virtual, Mousewheel, Pagination]}
          spaceBetween={0}
          slidesPerGroup={1}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={setSwiperRef}
          virtual
          mousewheel
          pagination={{
            el: '.swiper-custom-pagination',
            clickable: true,
            type: 'bullets',
          }}
          breakpoints={{
            520: {
              slidesPerGroup: 1,
              slidesPerView: 1,
              width: 250,
            },
            980: {
              slidesPerGroup: 2,
              slidesPerView: 2,
              width: 600,
            },
            1366: {
              slidesPerGroup: 3,
              slidesPerView: 3,
              width: 955,
            },
            1600: {
              width: 955,
              slidesPerGroup: 3,
              slidesPerView: 3,
            },
            2000: {
              width: 1433,
              slidesPerGroup: 3,
              slidesPerView: 3,
            },
          }}>
          {filteredProjects.map((project: any, index: number) => {
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
          })}
        </Swiper>
        <button onClick={handleNext} className="text-7xl xl:text-5xl hover:text-mainOrange dark:text-black">
          <MdArrowForwardIos />
        </button>
      </div>
      <div className="swiper-custom-pagination flex justify-center text-yellow-400"></div>
    </div>
  );
};

export default Carousel;
