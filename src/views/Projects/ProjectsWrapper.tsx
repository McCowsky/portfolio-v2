import { useGetProjects } from "../../features/queries";
import Projects from "./Projects";
import { MutableRefObject } from "react";

const ProjectsWrapper: React.FC<{
  scrollTo: (section: MutableRefObject<HTMLDivElement>) => void;
  goToSectionDownRef: MutableRefObject<HTMLDivElement | null>;
  goToSectionUpRef: MutableRefObject<HTMLDivElement | null>;
}> = ({ scrollTo, goToSectionDownRef, goToSectionUpRef }) => {
  const { status, error, data, isLoading } = useGetProjects();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>`Error! ${error.message}`</div>;
  if (data === undefined) return <div> data undefined</div>;
  return (
    <Projects
      projectsData={data}
      goToSectionDownRef={goToSectionDownRef}
      goToSectionUpRef={goToSectionUpRef}
      scrollTo={scrollTo}
    />
  );
};

export default ProjectsWrapper;
