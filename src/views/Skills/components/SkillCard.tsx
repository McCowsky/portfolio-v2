import { SiJavascript } from "react-icons/Si";

const SkillCard: React.FC<{ name: string; logo: string }> = ({ name, logo }) => {
  return (
    <div className="bg-[#14143A] w-fit p-12 flex flex-col justify-center items-center">
      <div className="bg-[#17203D] p-8 rounded-full">
        <SiJavascript className="text-6xl flex justify-center" />
      </div>
      <h3 className="text-3xl pt-6">{name}</h3>
    </div>
  );
};

export default SkillCard;
