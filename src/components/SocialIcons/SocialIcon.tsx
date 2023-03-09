import { FiLinkedin, FiGithub, FiMail } from "react-icons/Fi";

const SocialIcon: React.FC<{ url: string; icon: "linked" | "github" | "email" }> = ({
  url,
  icon,
}) => {
  return (
    <div className="border border-[#858591] dark:border-black rounded-full w-20 xl:w-16 md:w-12 h-20 xl:h-16 md:h-12 flex justify-center items-center dark:text-black">
      <a
        href={url}
        target="_blank"
        className="flex justify-center items-center w-full h-full "
      >
        {icon === "linked" && (
          <FiLinkedin className="text-5xl xl:text-3xl md:text-xl hover:text-mainOrange" />
        )}
        {icon === "github" && (
          <FiGithub className="text-5xl xl:text-3xl md:text-xl hover:text-mainOrange" />
        )}
        {icon === "email" && (
          <FiMail className="text-5xl xl:text-3xl md:text-xl hover:text-mainOrange" />
        )}
      </a>
    </div>
  );
};

export default SocialIcon;
