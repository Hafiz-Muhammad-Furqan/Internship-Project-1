import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const pages = [
    { name: "Home", link: "home" },
    { name: "Internships", link: "internships" },
    { name: "About Us", link: "about" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <nav className="fixed bg-[#1B2D26] z-10 top-0 w-full border-gray-500 border-b-2 border-solid px-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        <a className="flex items-center space-x-3 rtl:space-x-reverse relative z-[5]">
          <img
            src="/Images/logo.jpeg"
            className="h-12 rounded-full cursor-pointer "
            alt="Logo"
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
            className={`font-medium flex flex-col p-4 md:p-0   text-white md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 ${
              toggle
                ? "h-[100dvh] w-full absolute top-0 left-0 bg-black flex items-start justify-center  flex-col"
                : "hidden md:flex"
            }`}
          >
            {pages.map((page, index) => (
              <li key={index}>
                <Link
                  to={page.link}
                  duration={300}
                  smooth={true}
                  className="block py-2 md:px-3 text-white px-10 text-base  md:p-0 cursor-pointer"
                  aria-current="page"
                  onClick={() => setToggle(false)}
                >
                  {page.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="block py-2 md:px-3 text-white cursor-pointer rounded text-base px-10 md:p-0"
              >
                Apply Now
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
