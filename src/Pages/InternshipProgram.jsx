import React from "react";

const InternshipProgram = () => {
  return (
    <div className='w-full h-[85dvh] bg-[url("/Images/background-group.jpeg")] bg-cover bg-center'>
      <div className="w-full h-full relative max-w-[1000px] flex items-center justify-end">
        <div className="flex flex-col items-start justify-center bg-black w-[500px] p-14 gap-4 absolute -right-28">
          <h4 className="text-white text-lg font-bold bg-[#1C6F33] px-2 rounded-xl">
            Internship Programs
          </h4>
          <h1 className="text-3xl font-bold text-white">Learn by doing it.</h1>
          <p className="text-neutral-400 text-xl font-medium leading-7">
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
