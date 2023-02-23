import { ReactElement } from "react";
import { SiJavascript } from "react-icons/Si";

const SkillCard: React.FC<{ name: string; icon: ReactElement }> = ({ name, icon }) => {
  return (
    <div className="bg-[#14143A] min-w-[250px] w-fit py-12 flex flex-col justify-center items-center">
      <div className="bg-[#17203D] p-8 rounded-full">
        <div className="text-6xl flex justify-center">{icon}</div>
      </div>
      <h3 className="text-3xl pt-6">{name}</h3>
    </div>
  );
};

export default SkillCard;
