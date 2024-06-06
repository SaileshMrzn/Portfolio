import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

const About = () => {
  return (
    <div>
      <div className="md:h-screen h-[55rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] relative flex items-center justify-center flex-col">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>

        <div className="max-w-5xl mx-auto px-8">
          <div className="heading text-2xl md:text-2xl lg:text-3xl font-bold z-20 bg-clip-text text-white relative mt-10">
            About
          </div>

          <div className="w-[400px] md:w-[600px] text-center mt-12 leading-8 md:leading-10">
            <p>
              I'm currently a third-year student at Himalaya College of
              Engineering studying{" "}
              <span className="text-gradient">
                Bachelors in Computer Application (BCA)
              </span>
              . I've been fascinated about coding and always had a keen interest
              in emerging technologies ever since high school. I started web
              development as a hobby, learning web techlogies like HTML, CSS and
              JavaScript. Nowadays, I spend most of my time crafting
              applications on the web.
            </p>
            <br />
            <p>
              <span className="text-gradient">
                I'm currently looking for full-time or part-time software
                engineering opportunities starting in June/July 2024. If you're
                interested in working with me, feel free to reach out!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
