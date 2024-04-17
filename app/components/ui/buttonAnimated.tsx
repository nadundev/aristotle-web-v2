import React from "react";

const ButtonAnimated = () => {
  return (
    <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-brand-50">
      <span className="absolute inset-[-1000%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffebcb_0%,#84725C_50%,#ffebcb_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-brand-400 hover:text-white transition duration-300">
        Book an onboarding call
      </span>
    </button>
  );
};

export default ButtonAnimated;
