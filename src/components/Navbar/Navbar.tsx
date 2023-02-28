import { SlArrowDownCircle } from "react-icons/Sl";
import { Menu, Transition } from "@headlessui/react";
import { Switch } from "@headlessui/react";
import { useContext, MutableRefObject } from "react";
import ThemeContext from "../../context/ThemeContext";

const Navbar: React.FC<{
  goToSectionRefArray: any;
  scrollTo: (section: MutableRefObject<HTMLDivElement>) => void;
}> = ({ goToSectionRefArray, scrollTo }) => {
  const { currentTheme, changeCurrentTheme } = useContext(ThemeContext);

  const handleThemeChange = (): void => {
    changeCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <div className="h-24 w-full fixed bg-[#0D002B] dark:bg-white z-10 shadow-lg">
      <div className="h-24 w-[1920px] my-0 mx-auto px-10">
        <div className="flex items-center justify-end  h-full  text-white dark:text-[#393939] text-lg font-roboto font-medium">
          <h4 className="mr-auto text-3xl text-orange-400">MM</h4>
          <div className="flex">
            <ul className="flex gap-10 justify-center items-center">
              <li
                onClick={() => {
                  scrollTo(goToSectionRefArray[0]);
                }}
              >
                Home
              </li>
              <li
                onClick={() => {
                  scrollTo(goToSectionRefArray[1]);
                }}
              >
                Skills
              </li>
              <li
                onClick={() => {
                  scrollTo(goToSectionRefArray[2]);
                }}
              >
                My Work
              </li>
              <li>Resume</li>
              <li className="">
                {/* Contact Me! <SlArrowDownCircle className="text-2xl" /> */}
                <Menu as="div">
                  <Menu.Button className="flex justify-center items-center gap-2">
                    Contact Me! <SlArrowDownCircle className="text-2xl" />
                  </Menu.Button>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white divide-y divide-gray-200 focus:outline-none text-black">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="mailto:makowskimateusz@outlook.com"
                            className={`${
                              active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                            } block px-4 py-2 text-sm`}
                          >
                            email
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="https://www.linkedin.com/in/mateusz-makowski-983735239"
                            className={`${
                              active ? "bg-gray-100 text-gray-900 " : "text-gray-700 "
                            } block px-4 py-2 text-sm `}
                          >
                            LinkedIn
                          </a>
                        )}
                      </Menu.Item>{" "}
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="https://github.com/McCowsky"
                            className={`${
                              active ? "bg-gray-100 text-gray-900 " : "text-gray-700 "
                            } block px-4 py-2 text-sm `}
                          >
                            GitHub
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </li>
              <a href="" className="bg-orange-400 py-3 px-7 dark:text-white">
                Hire Me!
              </a>
              <Switch
                checked={currentTheme === "dark" ? true : false}
                onChange={handleThemeChange}
                className={`${
                  currentTheme === "dark" ? "bg-orange-400" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`${
                    currentTheme === "dark" ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
