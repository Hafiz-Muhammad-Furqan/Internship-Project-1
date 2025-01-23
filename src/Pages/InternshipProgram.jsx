import React from "react";

const InternshipProgram = () => {
  return (
    <div className='w-full h-[85dvh] bg-[url("/Images/background-group.jpeg")] bg-cover bg-center'>
      <div className="w-full h-full relative max-w-[1000px] flex items-center xl:p-0  p-10">
        <div className="flex flex-col items-start justify-center bg-black opacity-90 max-w-[500px] p-10 lg:p-14 lg:gap-4 gap-3 xl:absolute xl:-right-28">
          <h4 className="text-white text-baselg:text-lg font-semibold lg:font-bold bg-[#1C6F33] px-2 rounded-xl">
            Internship Programs
          </h4>
          <h1 className="lg:text-3xl text-xl font-bold text-white">
            Learn by doing it.
          </h1>
          <p className="text-neutral-400 lg:text-xl text-base font-medium leading-7">
            Today’s employer’s care about one thing – experience. The most
            important skills are learned on the job. That’s why we designed a
            program that will train you for the job market, by the job market.
          </p>
          <a
            href=""
            className="text-white font-semibold border-b-2 border-white text-lg"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default InternshipProgram;
