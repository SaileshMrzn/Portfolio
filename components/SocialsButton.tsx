"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hoverButton";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import Link from "next/link";

export function SocialsButton() {
  return (
    <div className="flex justify-center text-center gap-3">
      <HoverBorderGradient
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 h-[40px] w-[44px]"
      >
        <span>
          <Link
            href="https://www.linkedin.com/in/sailesh-maharjan-53450a241/"
            target="_blank"
          >
            <FaLinkedinIn />
          </Link>
        </span>
      </HoverBorderGradient>
      <HoverBorderGradient
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 h-[40px] w-[44px]"
      >
        <span>
          <Link href="https://github.com/SaileshMrzn" target="_blank">
            <FaGithub />
          </Link>
        </span>
      </HoverBorderGradient>
      <HoverBorderGradient
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 h-[40px] w-[44px]"
      >
        <span>
          <Link
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzDDHxZchWclbbssLzvnlBCNZjhnMRcFxpFRnRQnWwKsxPQcgLHGjdQlNxHKkbqGMDCWchR"
            target="_blank"
          >
            <GrMail />
          </Link>
        </span>
      </HoverBorderGradient>
    </div>
  );
}

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};
