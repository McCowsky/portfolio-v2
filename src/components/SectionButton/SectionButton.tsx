import { SlArrowDownCircle, SlArrowUpCircle } from 'react-icons/Sl';
import { RefObject } from 'react';

const SectionButton: React.FC<{
  scrollTo: (section: RefObject<HTMLDivElement>) => void;
  goToSectionRef: RefObject<HTMLDivElement>;
  direction: 'down' | 'up';
}> = ({ scrollTo, goToSectionRef, direction }) => {
  if (direction === 'down') {
    return (
      <div className="absolute bottom-12 xl:bottom-8 left-1/2 -translate-x-1/2 ">
        <SlArrowDownCircle
          className="text-6xl xl:text-4xl z-10 hover:text-mainOrange cursor-pointer animate-bounce dark:text-black dark:hover:text-mainOrange"
          onClick={() => scrollTo(goToSectionRef)}
        />
      </div>
    );
  }
  return (
    <div className="absolute top-12 xl:top-8 left-1/2 -translate-x-1/2  z-50">
      <SlArrowUpCircle
        className="text-6xl xl:text-4xl hover:text-mainOrange cursor-pointer animate-bounce dark:text-black dark:hover:text-mainOrange"
        onClick={() => scrollTo(goToSectionRef)}
      />
    </div>
  );
};

export default SectionButton;
