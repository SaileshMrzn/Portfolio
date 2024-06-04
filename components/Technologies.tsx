import React from "react";
import { Tech } from "@/data";
import Image from "next/image";

const Technologies = () => {
  return (
    <div>
      <div className="md:h-[50rem] h-[80rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.02] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>

        <div className="text-2xl md:text-2xl lg:text-3xl font-bold z-20 bg-clip-text text-white absolute md:top-32 top-24 my-4">
          Technologies
        </div>
        <br />

        <div className="w-[40vh] md:w-[870px] text-white flex justify-center flex-wrap">
          {Tech.map((item) => (
            <div
              className={`h-[120px] w-[120px] font-extralight text-[14px] bg-slate-800 bg-opacity-40 text-center flex items-center justify-center mx-3 my-3 rounded-lg flex-col`}
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
