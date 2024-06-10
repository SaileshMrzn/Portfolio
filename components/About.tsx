"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });

  const variants = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };
  return (
    <div>
      <div
        className="md:h-screen h-[55rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] relative flex items-center justify-end lg:justify-center flex-col"
        id="about"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>

        <div className="">
          <div className="text-3xl md:lext-4xl font-bold z-20 bg-clip-text text-white relative mt-10 text-center">
            About Me
          </div>

          <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="w-[400px] md:w-[600px] text-center mt-12 leading-8 md:leading-10 px-8 xs:px-2 md:px-4"
          >
            <p>
              I&apos;m currently a third-year student at Himalaya College of
              Engineering studying{" "}
              <span className="text-gradient">
                Bachelors in Computer Application (BCA)
              </span>
              . I&apos;ve been fascinated about coding and always had a keen
              interest in emerging technologies ever since high school. I
              started web development as a hobby, learning web techlogies like
              HTML, CSS and JavaScript. Nowadays, I spend most of my time
              crafting applications on the web.
            </p>
            <br />
            <p>
              <span className="text-gradient">
                I&apos;m currently looking for full-time or part-time software
                engineering opportunities starting in June/July 2024. If
                you&apos;re interested in working with me, feel free to reach
                out!
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
