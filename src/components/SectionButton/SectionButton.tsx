import { SlArrowDownCircle } from "react-icons/Sl";
import { MutableRefObject } from "react";

const SectionButton: React.FC<{
  scrollTo: (section: MutableRefObject<HTMLDivElement>) => void;
  goToSectionRef: any;
}> = ({ scrollTo, goToSectionRef }) => {
  return (
    <SlArrowDownCircle
      className="absolute bottom-16 left-1/2 -translate-x-1/2 text-6xl z-10"
      onClick={() => scrollTo(goToSectionRef)}
    />
  );
};

export default SectionButton;
