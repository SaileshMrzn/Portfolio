import React from "react";
import { Meteors } from "./ui/meteors";

const Quote = () => {
  return (
    <div className="">
      <div className="relative my-10 ">
        <div className="absolute inset-0 h-full w-full bg-gradient transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-slate-800 bg-opacity-70 border border-gray-800 px-4 py-4 md:py-8 h-full w-[300px] md:w-[500px] overflow-hidden rounded-lg flex flex-col justify-center items-center">
          <p className="font-bold text-xl text-white relative z-50 text-center">
            &quot;Believe you can and you&apos;re halfway there.&quot;
          </p>
          <br />
          <p className="font-light text-base">- Theodore Roosevelt</p>

          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
};

export default Quote;
