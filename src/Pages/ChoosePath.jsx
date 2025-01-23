import React from "react";

const ChoosePath = () => {
  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center">
      <div className="w-full max-w-[1000px] h-full flex gap-5 lg:gap-8 flex-col items-center justify-center py-10 lg:py-20 bg-white">
        <h1 className="lg:text-5xl text-4xl text-center font-bold text-black">
          Choose Your Path
        </h1>
        <p className="text-gray-600 lg:text-xl font-semibold lg:px-36 px-4 text-center">
          87% of people learning for professional development report career
          benefits like getting a promotion, a raise, or starting a new career
        </p>
        <div className="w-full flex flex-col lg:flex-row items-center justify-between pt-6 px-4 lg:px-0 gap-4 lg:gap-0">
          <img
            src="/Images/internsprogram.png"
            alt=""
            className="lg:h-96 h-full bg-cover border rounded-lg"
          />
          <div className="w-full flex flex-col items-start justify-start h-full lg:px-16 px-4 gap-3 lg:gap-6">
            <h1 className="text-black text-3xl lg:text-4xl font-bold">
              Interns Program
            </h1>
            <p className="text-gray-600 lg:text-xl font-semibold leading-6">
              An Immersive Internship Program that prepares students for the
              world's most in-demand career. Starting with the basic HTML
              leading towards a front-end developer career. A four weeks program
              completely based on learning and challenges.
            </p>
            <div className="flex items-center justify-center gap-2">
              <a href="" className="text-black font-semibold  text-lg">
                Learn More
              </a>
              <i className="ri-arrow-right-long-fill text-2xl pt-[4px]"></i>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center justify-between pt-6 px-4 lg:px-0 gap-4 lg:gap-0">
          <img
            src="/Images/sparkprogram.png"
            alt=""
            className="lg:h-96 h-full bg-cover border rounded-lg"
          />
          <div className="w-full flex flex-col items-start justify-start h-full lg:px-16 px-4 gap-3 lg:gap-6">
            <h1 className="text-black text-3xl lg:text-4xl font-bold">
              Spark Program
            </h1>
            <p className="text-gray-600 lg:text-xl font-semibold leading-6">
              If you're a big supporter of the learning-by-doing method, this is
              the right program for you. Work 1-on-1 under a vetted mentor for
              10 hours a week for 3 Weeks. This training is intense and you'll
              be coding most of the time, which will help you achieve the
              expertise in React and be able to take real projects, in a matter
              of no time.
            </p>
            <div className="flex items-center justify-center gap-2">
              <a href="" className="text-black font-semibold  text-lg">
                Learn More
              </a>
              <i className="ri-arrow-right-long-fill text-2xl pt-[4px]"></i>
            </div>
          </div>
        </div>
        <div className="w-full hidden lg:flex   items-center justify-center px-6 py-6 gap-9 border rounded-xl hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-300 cursor-pointer transition-all duration-200 ease-in-out mt-10">
          <h1 className="text-black text-3xl font-bold whitespace-nowrap">
            Achieve your goals
          </h1>
          <p className="text-xl font-semibold text-gray-500 px-4">
            Take the next step toward your personal and professional goals with
            interns
          </p>
          <i className="ri-arrow-right-s-line text-black text-3xl"></i>
        </div>
      </div>
    </div>
  );
};

export default ChoosePath;
