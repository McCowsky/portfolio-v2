import { useGetProjects } from "../../features/queries";
import Projects from "./Projects";

const ProjectsWrapper: React.FC = () => {
  const { status, error, data, isLoading } = useGetProjects();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>`Error! ${error.message}`</div>;
  if (data === undefined) return <div> data undefined</div>;
  //console.log(data);
  return <Projects projectsData={data} />;
};

export default ProjectsWrapper;
