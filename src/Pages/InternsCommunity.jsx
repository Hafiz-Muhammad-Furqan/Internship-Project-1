import React from "react";

const InternsCommunity = () => {
  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center bg-[#F4FBF8]">
      <div className="w-full max-w-[1000px] h-full flex items-center justify-center gap-8 flex-col px-4 xl:px-0 py-8 xl:py-0">
        <h1 className="text-3xl lg:text-5xl font-bold text-black">
          Interns Community
        </h1>
        <h5 className="lg:text-xl  tracking-tight font-semibold text-gray-600 text-center">
          We have had this opportunity to build something that is currently
          being used by a community of more than 65 thousand students.
        </h5>
        <div className="w-full grid grid-cols-1 xl:grid-cols-4 gap-5 ">
          <div className="px-6 w-full bg-white rounded-xl border cursor-pointer flex flex-col items-start justify-center gap-2 py-5 text-gray-700">
            <h6 className=" leading-6 tracking-tight font-medium">
              This self-paced, well explained learning experience. Has
              introduced me to new skills and helped me in polishing the things
              I already knew.
            </h6>
            <p className="font-bold text-black">
              Syed Muhammad Jhon Raza Naqvi
            </p>
          </div>
          <div className="px-6 w-full bg-white text-gray-700 rounded-xl border cursor-pointer flex flex-col items-start justify-center gap-2 py-5">
            <h6 className=" leading-6 tracking-tight font-medium">
              I learned so many skills from Interns Program. I would like to say
              that it is the best front-end development. Plus i learned alot
              from my peer Interns as well. This internship is really helpful
              for me.
            </h6>
            <p className="font-bold text-black">Syed Muhammad Raza</p>
          </div>
          <div className="px-6 w-full bg-white rounded-xl border cursor-pointer flex flex-col items-start justify-center gap-2 py-5 text-gray-700">
            <h6 className=" leading-6 tracking-tight font-medium">
              I do really have a great experience with internship, having very
              amazing learning environment that never let me bore and keep
              motivating me itself. Thank you so much Interns.pk!
            </h6>
            <p className="font-bold text-black">Khadija Ishaq</p>
          </div>
          <div className="px-6 w-full bg-white rounded-xl border cursor-pointer flex flex-col items-start justify-center gap-2 py-5 text-gray-700">
            <h6 className=" leading-6 tracking-tight font-medium">
              A great opportunity! 100% recommended to those who want to get a
              head-start in their field! It introduced me to a whole new way of
              learning while teaching me new skills!
            </h6>
            <p className="font-bold text-black">Maha Jamshaid</p>
          </div>
        </div>
        <div className="flex gap-1">
          <p className="text-extrabold text-black">
            Wish to learn more, visit our
          </p>
          <a href="" className="text-bold text-[#104820] underline">
            wall of Love.
          </a>
        </div>
      </div>
    </div>
  );
};

export default InternsCommunity;
