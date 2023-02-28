import { useEffect, useRef, MutableRefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
const GsapAnimation = ({ children, wrapperElement = "div", ...props }: any) => {
  gsap.registerPlugin(ScrollTrigger);

  const Component = wrapperElement;
  let compRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      compRef.current,
      {
        autoAlpha: 0,
        y: -80,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        scrollTrigger: {
          scroller: "#contain",
          trigger: compRef.current,
          start: "top 60%",
          end: "bottom 0%",
          toggleActions: "play none restart reverse",
        },
      }
    );
  }, []);
  return (
    <Component ref={compRef} {...props}>
      {children}
    </Component>
  );
};

export default GsapAnimation;
