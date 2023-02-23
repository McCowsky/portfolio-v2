import { useRef } from "react";
import Hero from "./views/Hero/Hero";
import Hero2 from "./views/Hero2/Hero2";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./views/Skills/Skills";
useRef;
const App: React.FC = () => {
  const heroSection = useRef();

  const scrollTo = (section: any) => {
    section.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="App">
      <Navbar />
      <div className="relative top-24 overflow-y-auto overscroll-y-contain snap-y snap-mandatory h-[calc(100vh-96px)] w-full text-white">
        <Hero />
        <Skills />
      </div>
    </div>
  );
};

export default App;
