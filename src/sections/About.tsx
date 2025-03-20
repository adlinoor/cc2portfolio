"use client";
import { FC, useEffect } from "react";
import { stagger, useAnimate, useInView } from "motion/react";
import SplitType from "split-type";

const About: FC = () => {
  // Initialize animation hooks
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, {
    once: true,
  });

  // Split text into lines and words when in view
  useEffect(() => {
    if (inView) {
      new SplitType(scope.current.querySelector("h2"), {
        types: "lines,words",
        tagName: "span",
      });
    }
  }, [scope, inView]);

  // Animate words when in view
  useEffect(() => {
    if (inView) {
      animate(
        scope.current.querySelectorAll(".word"),
        {
          opacity: [0, 1],
          transform: ["translateY(100%)", "translateY(0%)"],
        },
        {
          duration: 0.5,
          delay: stagger(0.2),
        }
      );
    }
  }, [inView, animate, scope]);

  return (
    <section
      id="about"
      className="section mt-12 md:mt-16 lg:mt-20 items-center bg-stone-200 font-sans"
      ref={scope}
    >
      <div className="container flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]">
          A Musician who cross the ocean into the Web Development World
        </h2>
      </div>
    </section>
  );
};

export default About;
