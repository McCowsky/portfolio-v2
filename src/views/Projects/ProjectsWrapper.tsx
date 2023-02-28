import { useGetProjects } from "../../features/queries";
import Projects from "./Projects";
import { MutableRefObject } from "react";

const ProjectsWrapper: React.FC<{
  scrollTo: (section: MutableRefObject<HTMLDivElement>) => void;
  goToSectionRef: any;
}> = ({ scrollTo, goToSectionRef }) => {
  const { status, error, data, isLoading } = useGetProjects();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>`Error! ${error.message}`</div>;
  if (data === undefined) return <div> data undefined</div>;
  //console.log(data);
  return (
    <Projects projectsData={data} goToSectionRef={goToSectionRef} scrollTo={scrollTo} />
  );
};

export default ProjectsWrapper;
