import SkillCard from "./components/SkillCard";
import IconsData from "./features/iconsUsed";
const Skills: React.FC = () => {
  return (
    <div className="w-full h-[calc(100vh-96px)] snap-center bg-[#0D002B]">
      <div className="h-auto w-[1920px] my-0 mx-auto px-10 ">
        <div className="flex flex-col justify-center items-center gap-20 h-[calc(100vh-96px)]">
          <div>
            <h3 className="uppercase text-center text-xl text-orange-400">
              My skills progress so far
            </h3>
            <h2 className="text-6xl text-center pt-3">My Skills</h2>
          </div>
          <div className="grid justify-center my-0 mx-auto justify-items-center items-center grid-cols-3 w-fit gap-10 flex-wrap">
            {/* <SkillCard name="JavaScript" icon="SiJavascript" /> */}
            {IconsData.map((icon) => {
              return <SkillCard name={icon.title} icon={icon.icon} key={icon.title} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
