const Navbar: React.FC = () => {
  return (
    <div className="h-24 w-full fixed bg-[#0D002B] z-10">
      <div className="h-24 w-[1920px] my-0 mx-auto px-10">
        <div className="flex items-center justify-end  h-full  text-white text-lg font-roboto font-medium">
          <h4 className="mr-auto text-3xl text-orange-400">MM</h4>
          <div className="flex">
            <ul className="flex gap-10 justify-center items-center">
              <li>Home</li>
              <li>Skills</li>
              <li>My Work</li>
              <li>Resume</li>
              <a href="" className="bg-orange-400 py-3 px-7">
                Hire Me!
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
