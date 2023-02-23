import SkillCard from "./components/SkillCard";
import IconsData from "./features/iconsUsed";
const Skills: React.FC = () => {
  return (
    <div className="w-full h-[calc(100vh-96px)] snap-center bg-[#0D002B]">
      <div className="h-auto w-[1920px] my-0 mx-auto px-10 ">
        <div className="flex flex-col justify-center items-center gap-20 h-[calc(100vh-96px)]">
          <h2 className="text-6xl text-center ">My Skills</h2>
          <div className="grid justify-center my-0 mx-auto justify-items-center items-center grid-cols-3 w-fit gap-10 flex-wrap">
            {/* <SkillCard name="JavaScript" icon="SiJavascript" /> */}
            {IconsData.map((icon, index) => {
              return <SkillCard name={icon.title} icon={icon.icon} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
