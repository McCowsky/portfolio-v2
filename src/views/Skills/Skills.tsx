import SkillCard from "./components/SkillCard";

const Skills: React.FC = () => {
  return (
    <div className="w-full h-[calc(100vh-96px)] snap-center bg-[#0D002B]">
      <div className="h-auto w-[1920px] my-0 mx-auto px-10 ">
        <div className=" ">
          <h2 className="text-6xl text-center pt-32">My Skills</h2>
          <div>
            <SkillCard name="JavaScript" logo="SiJavascript" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
