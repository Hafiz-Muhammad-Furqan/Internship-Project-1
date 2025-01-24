import React from "react";

const Lab = () => {
  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center bg-white">
      <div className="w-full h-full max-w-[1000px] flex flex-col items-center justify-center gap-8 py-10 px-4 lg:px-0">
        <h1 className="lg:text-5xl font-bold text-3xl text-black">
          Checkout Our Lab
        </h1>
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-0">
          <p className="lg:text-xl text-lg font-bold text-gray-600 text-center">
            We write about programming, paths and offered programs
          </p>
          <button className="border  text-xl font-bold flex items-center justify-center gap-3 hover:scale[1.04] cursor-pointer transition-all duration-200 ease-in-out text-[#104820] p-2 whitespace-nowrap">
            View More
            <i className="ri-arrow-right-s-line text-black text-3xl"></i>
          </button>
        </div>
        <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  transition-all duration-200 ease-in-out cursor-pointer hover:scale-[1.04]">
            <a href="#">
              <img className="rounded-t-lg" src="/Images/avatar.avif" alt="" />
            </a>
            <div className="p-5">
              <p className="px-2 mb-2 text-sm font-semibold rounded-xl bg-green-600 text-white inline-block">
                Success Stories
              </p>
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  ALex Suprun
                </h5>
              </a>
              <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
                An interns success story
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  transition-all duration-200 ease-in-out cursor-pointer hover:scale-[1.04]">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="/Images/report-19.png"
                alt=""
              />
            </a>
            <div className="p-5">
              <p className="px-2 mb-2 text-sm font-semibold rounded-xl bg-green-600 text-white inline-block">
                Reports
              </p>
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Interns Progarm
                </h5>
              </a>
              <p className="mb-3 font-bold text-gray-700 ">An insight report</p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  transition-all duration-200 ease-in-out cursor-pointer hover:scale-[1.04]">
            <a href="#">
              <img className="rounded-t-lg" src="/Images/php.png" alt="" />
            </a>
            <div className="p-5">
              <p className="px-2 mb-2 text-sm font-semibold rounded-xl bg-green-600 text-white inline-block">
                Guides
              </p>
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Learning Php
                </h5>
              </a>
              <p className="mb-3 font-bold text-gray-700 0">Video Tutorials</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lab;
