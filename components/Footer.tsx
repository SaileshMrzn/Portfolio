"use client";
import React from "react";
import { SocialsButton } from "./SocialsButton";
import Quote from "./Quote";

const Footer = () => {
  return (
    <footer>
      <div className="lg:h-[55vh] h-[50vh] w-full dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] relative flex items-center justify-end flex-col py-4">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>

        <Quote />

        <div className="flex flex-col gap-4 my-4">
          <span className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Sailesh Maharjan. All rights
            reserved.
          </span>

          <SocialsButton />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
