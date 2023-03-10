import { ReactElement } from "react";

const SkillCard: React.FC<{ name: string; icon: ReactElement }> = ({ name, icon }) => {
  return (
    <div className="bg-[#14143A] dark:bg-white min-w-[250px] xl:min-w-[200px] md:min-w-[175px] sm:min-w-[125px] w-fit py-12 xl:py-10 md:py-8 sm:py-4 flex flex-col justify-center items-center">
      <div className="bg-[#17203D] dark:bg-[#858591] p-8 xl:p-6 md:p-5 sm:p-4 rounded-full">
        <div className="text-6xl xl:text-4xl sm:text-3xl flex justify-center dark:text-white">
          {icon}
        </div>
      </div>
      <h3 className="text-3xl xl:text-xl sm:text-lg pt-6 sm:pt-4 dark:text-black">
        {name}
      </h3>
    </div>
  );
};

export default SkillCard;
