"use client";

import React from "react";
import { Tech } from "@/data";
import Image from "next/image";
import { useState } from "react";

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryChange = ({ category }: { category: string }) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <div
        className="md:h-screen h-[85rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] relative flex items-center justify-center flex-col"
        id="technologies"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>

        <div className="absolute top-36">
          <div className="text-3xl lg:text-4xl text-center font-bold z-20 bg-clip-text text-white relative">
            Technologies
          </div>

          <div className="navigation mt-12 flex gap-3 flex-wrap justify-center items-center">
            <span
              className={` py-[16px] px-[32px] rounded-lg cursor-pointer ${
                activeCategory === "all"
                  ? "bg-purple"
                  : "hover:bg-slate-800 hover:bg-opacity-40"
              }`}
              onClick={() => handleCategoryChange({ category: "all" })}
            >
              All
            </span>
            <span
              className={`py-[16px] px-[32px] rounded-lg cursor-pointer ${
                activeCategory === "frontend"
                  ? "bg-purple"
                  : "hover:bg-slate-800 hover:bg-opacity-40"
              }`}
              onClick={() => handleCategoryChange({ category: "frontend" })}
            >
              Front-End
            </span>
            <span
              className={`py-[16px] px-[32px] rounded-lg cursor-pointer ${
                activeCategory === "backend"
                  ? "bg-purple"
                  : "hover:bg-slate-800 hover:bg-opacity-40"
              }`}
              onClick={() => handleCategoryChange({ category: "backend" })}
            >
              Back-End
            </span>
            <span
              className={`py-[16px] px-[32px] rounded-lg cursor-pointer ${
                activeCategory === "database"
                  ? "bg-purple"
                  : "hover:bg-slate-800 hover:bg-opacity-40"
              }`}
              onClick={() => handleCategoryChange({ category: "database" })}
            >
              Database
            </span>
          </div>
        </div>

        <div className="content w-[40vh] md:w-[870px] text-white flex justify-center flex-wrap md:mt-48 -mt-72 h-[20rem] ">
          {Tech.filter(
            (item) =>
              activeCategory === "all" || item.category === activeCategory
          ).map((item) => (
            <div
              key={item.id}
              className={`h-[120px] w-[120px] font-extralight text-[14px] bg-slate-800 bg-opacity-40 text-center flex items-center justify-center mx-3 my-3 rounded-lg flex-col hover:scale-110 transition-all ease-in-out duration-200`}
            >
              <div>
                <Image
                  src={item.thumbnail}
                  width={40}
                  height={40}
                  alt="Picture of the author"
                  className="my-1"
                />
              </div>
              <div>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
