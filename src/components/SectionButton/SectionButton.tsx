import { SlArrowDownCircle, SlArrowUpCircle } from "react-icons/Sl";
import { MutableRefObject } from "react";

const SectionButton: React.FC<{
  scrollTo: (section: MutableRefObject<HTMLDivElement>) => void;
  goToSectionRef: any;

  direction: "down" | "up";
}> = ({ scrollTo, goToSectionRef, direction }) => {
  if (direction === "down") {
    return (
      <SlArrowDownCircle
        className="absolute bottom-12 xl:bottom-8 left-1/2 -translate-x-1/2 text-6xl xl:text-4xl z-10 hover:text-mainOrange cursor-pointer"
        onClick={() => scrollTo(goToSectionRef)}
      />
    );
  } else {
    return (
      <SlArrowUpCircle
        className="absolute top-12 xl:top-8 left-1/2 -translate-x-1/2 text-6xl xl:text-4xl z-10 hover:text-mainOrange cursor-pointer"
        onClick={() => scrollTo(goToSectionRef)}
      />
    );
  }
};

export default SectionButton;
