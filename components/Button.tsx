import React from "react";

const Button = ({
  title,
  icon,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <div>
      <button
        className={`w-full md:w-50 px-6 py-3 my-5 bg-transparent border text-white rounded-lg text-sm font-light transform hover:bg-slate-800 transition-all ease-in-out duration-400 flex items-center gap-2 ${otherClasses}`}
        onClick={handleClick}
      >
        {title}
        {icon}
      </button>
    </div>
  );
};

export default Button;
