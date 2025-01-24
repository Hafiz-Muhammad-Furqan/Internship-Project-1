import React from "react";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about">
      <div className="h-[100dvh] min-h-[100dvh] w-full flex items-center justify-center bg-white md:bg-[linear-gradient(to_right,_white_70%,_#1C6F33_50%)]">
        <div className=" w-full h-full flex flex-col md:flex-row items-center justify-center max-w-[1000px]">
          <div className="md:w-[60%] w-full h-full flex items-start flex-col justify-center gap-6 lg:px-0 px-4 py-10 md:py-0">
            <h1 className="text-black text-4xl lg:text-5xl font-bold">
              About Interns
            </h1>
            <h4 className="text-[#617084] lg:text-xl text-lg font-medium lg:font-semibold leading-7 tracking-normal">
              Interns started with the belief that anyone, anywhere, should be
              able to get the skills and experience they need to start their
              career without barriers like schedule, or location getting in
              their way.
            </h4>
            <h5 className="text-[#617084] lg:text-xl text-lg font-medium lg:font-semibold">
              It provides you with the opportunities, support, and mentorship
              all you need to launch your dream career employing internships or
              its career-enhancing programs.
            </h5>
          </div>
          <div className="md:w-[40%] w-full md:h-full -order-1 md:order-1 bg-[#1C6F33] flex flex-col">
            <div className="w-full hover:bg-[#104820] flex items-center justify-between border-b-2 border-white py-6 px-4 gap-4 transition-all duration-200 ease-in-out cursor-pointer md:py-4">
              <div className="flex items-center gap-4 border-r-2 border-solid border-white flex-grow ">
                <i className="ri-file-text-fill text-white text-3xl"></i>
                <h2 className="text-white text-2xl font-bold tracking-tight">
                  Apply Now
                </h2>
              </div>
              <i className="ri-arrow-right-s-line text-white text-3xl"></i>
            </div>

            <div className="md:flex flex-grow items-start justify-center flex-col text-center gap-5 px-6 hidden ">
              <h1 className="text-white text-3xl font-bold">Mission</h1>
              <p className="text-white text-start text-lg font-medium leading-6 italic">
                With a mission to enable individuals globally to lead
                successful, meaningful & fulfilling lives.
              </p>
              <a
                href=""
                className="text-white font-semibold border-b-2 border-white text-lg"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
