import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="absolute top-0 w-full  border-gray-500 border-b-2 border-solid py-2 px-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse relative z-[5]"
        >
          <span className="self-center text-2xl text-white font-semibold whitespace-nowrap">
            interns
          </span>
          <img
            src="/Images/flag-400.png"
            className="h-4 absolute bottom-0 -right-9 "
            alt="Flowbite Logo"
          />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center z-[5]  w-10 h-6 justify-center text-sm text-white rounded-lg md:hidden "
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={handleToggle}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="w-full md:w-auto" id="navbar-default">
          <ul
            className={`font-medium flex flex-col p-4 md:p-0   text-white md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 ${
              toggle
                ? "h-[100dvh] w-full absolute top-0 left-0 bg-black flex items-start justify-center  flex-col"
                : "hidden md:flex"
            }`}
          >
            <li>
              <a
                href="#"
                className="block py-2 md:px-3 text-white px-10 text-lg font-bold md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 md:px-3 text-white rounded text-lg font-bold px-10 md:p-0"
              >
                About US
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 md:px-3 text-white rounded text-lg font-bold px-10 md:p-0"
              >
                Interns Program
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 md:px-3 text-white rounded text-lg font-bold px-10 md:p-0"
              >
                Spark
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 md:px-3 text-white rounded text-lg font-bold px-10 md:p-0"
              >
                Login
              </a>
            </li>
            <li className="absolute flex flex-col items-start gap-2 justify-center bottom-10 md:hidden px-10">
              <div className="w-full flex items-center justify-start text-2xl gap-3">
                <i className="ri-twitter-fill"></i>
                <i className="ri-facebook-fill"></i>
                <i className="ri-instagram-fill"></i>
                <i className="ri-linkedin-fill"></i>
              </div>
              <p className="font-bold text-lg text-zinc-400">
                © 2023 Copyrights Governed By Interns Pakistan.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
