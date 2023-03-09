import { RefObject, useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const GsapAnimation: React.FC<{ children: ReactNode }> = ({ children, ...props }) => {
  gsap.registerPlugin(ScrollTrigger);

  const Component = 'div';
  const compRef: RefObject<HTMLDivElement> = useRef(null);

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
          scroller: '#contain',
          trigger: compRef.current,
          start: 'top 60%',
          end: 'bottom 0%',
          toggleActions: 'play none restart reverse',
        },
      },
    );
  }, []);
  return (
    <Component ref={compRef} {...props}>
      {children}
    </Component>
  );
};

export default GsapAnimation;
