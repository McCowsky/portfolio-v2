import hero from "../../assets/home.svg";
import Typewriter from "typewriter-effect";

const Hero2: React.FC = () => {
  return (
    <div className="w-full h-[calc(100vh-96px)] snap-center	 bg-red-400">
      <div className="h-auto w-[1280px] my-0 mx-auto px-10 ">
        <div className="flex justify-center items-center">
          <div className="basis-1/2">
            <h2 className="uppercase font-roboto text-2xl">Frond-End Developer</h2>
            <h1 className="">
              <Typewriter
                options={{ cursor: "_" }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      " Hi There! <br/> I'M MATEUSZ MAKOWSKI <br/> web developer"
                    )
                    .start();
                }}
              />
            </h1>
          </div>
          <div className="basis-1/2">
            <img src={hero} alt="hero image" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
