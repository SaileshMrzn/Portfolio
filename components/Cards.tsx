import React from "react";
import { projects } from "@/data/index";
import { HoverEffect } from "./ui/hoverCard";
import Image from "next/image";

const Cards = () => {
  return (
    <div>
      <div
        className="h-[110rem] xs:h-[85rem] sm:h-[110vh] md:h-[120vh] w-full dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] relative flex items-center justify-center flex-col"
        id="projects"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>

        <div className="max-w-5xl mx-auto px-8">
          <div className="text-3xl lg:text-4xl text-center font-bold z-20 bg-clip-text text-white relative mt-10">
            My Projects
          </div>
          <HoverEffect items={projects} />
        </div>
      </div>
    </div>
  );
};
export default Cards;
