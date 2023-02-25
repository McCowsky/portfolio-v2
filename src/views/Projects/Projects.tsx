import ProjectCard from "./components/ProjectCard/ProjectCard";
import { bestProjects } from "./bestProjects.json";

const Projects: React.FC<{ projectsData: { [key: string]: any }[] }> = ({
  projectsData,
}) => {
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
  console.log(filteredProjects);

  console.log(filteredProjects[0].id);

  return (
    <div className="w-full h-[calc(100vh-96px)] snap-center bg-[#0D002B]">
      <div className="h-auto w-[1920px] my-0 mx-auto px-10 ">
        <div className="flex flex-col justify-center items-center gap-20 h-[calc(100vh-96px)]">
          <div>
            <h3 className="uppercase text-center text-xl text-orange-400">
              Check out my recent projects
            </h3>
            <h2 className=" text-6xl text-center pt-3">Apps I've built</h2>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {filteredProjects.map((project: { [key: string]: any }) => {
              return (
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  description={project.description}
                  url={project.html_url}
                  img_url={project.img_url}
                  languages={project.languages_array}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
