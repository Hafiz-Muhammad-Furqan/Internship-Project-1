import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center bg-[#090E0B] py-12">
      <div className="w-full max-w-[1000px] flex flex-col items-center justify-between px-4">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-7 lg:gap-0">
          <div className="w-full flex lg:items-start items-center justify-center flex-col lg:pr-60 gap-4">
            <img
              src="/Images/logo.jpeg"
              className="h-12 rounded-full cursor-pointer"
              alt=" Logo"
            />
            <h1 className="text-white text-2xl font-semibold lg:text-start text-center">
              Enabling Individuals to live meaningful Lives
            </h1>
          </div>

          <div className="flex items-start justify-end lg:gap-x-12 gap-x-6  ">
            <div className="flex flex-col items-start justify-center gap-2">
              <a
                href="#"
                className="text-zinc-400  hover:text-gray-400 text-base font-bold"
              >
                Programs
              </a>
              <a
                href="#"
                className="text-zinc-400  hover:text-gray-400 text-base font-bold"
              >
                Reports
              </a>
              <a
                href="#"
                className="text-zinc-400  hover:text-gray-400 text-base font-bold whitespace-nowrap"
              >
                Interns Lab
              </a>
              <a
                href="#"
                className="text-zinc-400  hover:text-gray-400 text-base font-bold whitespace-nowrap"
              >
                Wall of Love
              </a>
              <a
                href="#"
                className="text-zinc-400  hover:text-gray-400 text-base font-bold whitespace-nowrap"
              >
                About Us
              </a>
            </div>

            <div className="flex flex-col items-start justify-center gap-2">
              <a
                href="#"
                className="text-zinc-400  hover:text-gray-400 text-base font-bold whitespace-nowrap"
              >
                Work Time Us
              </a>
              <a
                href="#"
                className="text-zinc-400  hover:text-gray-400 text-base font-bold whitespace-nowrap"
              >
                Hire Internee
              </a>
              <a
                href="#"
                className="text-zinc-400  hover:text-gray-400 text-base font-bold"
              >
                Support
              </a>
              <a
                href="#"
                className="text-zinc-400  hover:text-gray-400 text-base font-bold whitespace-nowrap"
              >
                Contact Us
              </a>
            </div>

            <div className="flex flex-col items-start justify-center gap-2">
              <a
                href="#"
                className="text-zinc-400  hover:text-gray-400 text-2xl font-bold"
              >
                <i className="ri-twitter-line"></i>
              </a>
              <a
                href="#"
                className="text-zinc-400  hover:text-gray-400 text-2xl font-bold"
              >
                <i className="ri-facebook-line"></i>
              </a>
              <a
                href="#"
                className="text-zinc-400  hover:text-gray-400 text-2xl font-bold"
              >
                <i className="ri-linkedin-line"></i>
              </a>
              <a
                href="#"
                className="text-zinc-400  hover:text-gray-400 text-2xl font-bold"
              >
                <i className="ri-instagram-line"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className=" w-full my-10" />
        <div className="w-full flex items-start lg:items-center justify-between flex-col lg:flex-row gap-3 lg:gap-0">
          <p className="text-zinc-400 font-bold text-sm lg:text-base">
            © 2023 Copyrights Governed By Interns Pakistan.
          </p>
          <p className="text-white flex items-center justify-center text-sm lg:text-base cursor-pointer">
            Privacy Policy
            <i className="ri-arrow-right-s-line text-white text-xl"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
