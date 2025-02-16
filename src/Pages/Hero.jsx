import React from "react";
import Navbar from "../components/Navbar";
import { Element } from "react-scroll";

const Hero = () => {
  return (
    <Element name="home">
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
        <div className=" w-full h-full absolute top-0 flex items-start justify-end gap-24 md:gap-32  flex-col max-w-[1000px]">
          {/* <Navbar /> */}
          <div className=" flex flex-col justify-between items-start gap-5 lg:w-[75%] w-full px-4 lg:px-0">
            <h1 className="text-white xl:text-5xl md:text-4xl text-3xl font-bold ">
              Internships designed to get you job-ready.
            </h1>
            <h2 className="text-neutral-300 xl:text-xl font-semibold">
              Get the practical experience you need to stand out in today’s job
              market and begin your professional career by learning through an
              internship.
            </h2>
            <a
              href=""
              className="text-xl font-semibold text-white border-white border-b-2"
            >
              Explore Internships
            </a>
          </div>
          <div className="lg:w-[75%]  w-full flex flex-col  items-start justify-center pb-10  px-4 lg:px-0">
            <p className="text-white text-xl font-bold "> Next Batch</p>
            <p className="text-neutral-300 text-lg font-semibold">
              Starts Dec 16, 2024
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Hero;
