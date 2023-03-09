import { Switch } from '@headlessui/react';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/Fi';
import { ScrollProps, ThemeContextType } from '../../features/types';

const Navbar: React.FC<ScrollProps> = ({ goToSectionRefArray, scrollTo }) => {
  const { currentTheme, changeCurrentTheme } = useContext<ThemeContextType>(ThemeContext);

  const handleThemeChange = (): void => {
    changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="h-24 sm:h-20 w-full fixed bg-[#0D002B] dark:bg-white z-10 shadow-lg">
      <div className="h-24 sm:h-20 w-[1920px] xl:w-[1440px] lg:w-[1280px] md:w-[960px] sm:w-[480px] my-0 mx-auto px-10">
        <div className="flex items-center justify-end  h-full  text-white dark:text-[#393939] text-lg sm:text-base font-oswald font-medium">
          <h4 className="mr-auto text-3xl text-mainOrange sm:hidden">MM</h4>
          <div className="flex">
            <ul className="flex gap-10 sm:gap-4 justify-center items-center">
              {['Home', 'Skills', 'My work', 'Resume'].map((title, index) => (
                <li
                  key={title}
                  className="hover:text-mainOrange flex h-full items-center cursor-pointer"
                  onClick={() => {
                    scrollTo(goToSectionRefArray[index]);
                  }}>
                  {title}
                </li>
              ))}
              <li
                onClick={() => {
                  scrollTo(goToSectionRefArray[4]);
                }}
                className="bg-mainOrange sm:bg-inherit py-3 sm:py-0 px-7 sm:px-0 dark:text-white cursor-pointer hover:bg-[#130538]">
                Hire Me!
              </li>
              <div className="flex justify-center items-center gap-1">
                <FiSun />
                <Switch
                  checked={currentTheme === 'dark' ? true : false}
                  onChange={handleThemeChange}
                  className={`${
                    currentTheme === 'dark' ? 'bg-mainOrange' : 'bg-gray-200'
                  } relative inline-flex h-6 w-11 items-center rounded-full`}>
                  <span className="sr-only">Enable notifications</span>
                  <span
                    className={`${
                      currentTheme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
                <FiMoon />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
