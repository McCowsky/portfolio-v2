import { useGetProjects } from '../../features/queries';
import Projects from './Projects';
import { RefObject } from 'react';

const ProjectsWrapper: React.FC<{
  scrollTo: (section: RefObject<HTMLDivElement>) => void;
  goToSectionRefArray: RefObject<HTMLDivElement>[];
}> = ({ scrollTo, goToSectionRefArray }) => {
  const { error, data, isLoading } = useGetProjects();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>`Error! ${error.message}`</div>;
  if (data === undefined) return <div> data undefined</div>;
  return <Projects projectsData={data} goToSectionRefArray={goToSectionRefArray} scrollTo={scrollTo} />;
};

export default ProjectsWrapper;
