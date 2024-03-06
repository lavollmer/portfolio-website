import React from "react";

const NavBar = () => {
  return (
    <header className="flex text-gray-600 body-font space-x-5">
      <div className="container mx-auto w-full h-full flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto p-1">
          <a className="mr-5 hover:text-gray-900" href="#about">
            Hello
          </a>
          <a className="mr-5 hover:text-gray-900" href="#skills">
            Skills
          </a>
          <a className="mr-5 hover:text-gray-900" href="#projects">
            Projects
          </a>
          <a className="mr-5 hover:text-gray-900" href="#work">
            Work
          </a>
          <a className="hover:text-gray-900" href="#contact">
            Contact
          </a>
        </nav>
        <span className="ml-3 p-2 text-3xl border-solid font-family-arial text-black font-bold">
          Laura Vollmer
        </span>
        <div className="flex p-1 lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 space-x-5">
          <a href="https://www.linkedin.com/in/lvollmer/">
            <button className="inline-flex items-center bg-black text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-900 rounded text-base mt-4 md:mt-0">
              LinkedIn
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </a>
          <a href="https://github.com/lavollmer">
            <button className="inline-flex items-center bg-black text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-900  rounded text-base mt-4 md:mt-0">
              Github
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
