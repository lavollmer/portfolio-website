import React from "react";
import Sidenav from "./Sidenav";

const Header = () => {
  return (
    <div className="flex flex-row justify-content space-evenly p-2">
      <div className="flex flex-row justify-content items-center">
        <span className="ml-3 p-2 text-3xl border-solid font-family-arial text-black font-bold">
          Laura Vollmer
        </span>
      </div>
      <div className="flex p-1 lg:w-2/5 inline-flex justify-end ml-5 lg:ml-0 space-x-5">
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
        <Sidenav />
      </div>
    </div>
  );
};

export default Header;
