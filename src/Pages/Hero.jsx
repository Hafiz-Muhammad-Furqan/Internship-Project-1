import React from "react";
import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <div className="h-[100dvh] w-full relative flex items-center justify-center">
      <div
        className=" w-full h-full bg-cover bg-center  bg-[#166b2eb8]"
        style={{
          backgroundImage:
            "linear-gradient(45deg, #000, transparent), url('/Images/background-home.jpg')",
        }}
      >
        <div className="w-full h-full bg-[#166b2eb8] mix-blend-multiply opacity-90 absolute top-0"></div>
      </div>
      <div className=" w-full h-full absolute top-0 flex items-start justify-around flex-col max-w-[1000px]">
        <Navbar />
        <div className=" flex flex-col justify-between items-start gap-5 w-[75%]">
          <h1 className="text-white text-5xl font-bold ">
            Internships designed to get you job-ready.
          </h1>
          <h2 className="text-neutral-300 text-xl font-semibold">
            Get the practical experience you need to stand out in today’s job
            market and begin your professional career by learning through an
            internship.
          </h2>
          <a
            href=""
            className="text-xl font-semibold text-white border-white border-b-2"
          >
            Learn More
          </a>
        </div>
        <div className="w-[75%] flex flex-col  items-start justify-center">
          <p className="text-white text-xl font-bold "> Next Batch</p>
          <p className="text-neutral-300 text-lg font-semibold">
            {" "}
            Starts Dec 16, 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
