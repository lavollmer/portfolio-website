import React, { useState } from "react";
import HamburgerIcon from "../components/HamburgerIcon.jsx";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  //isMenuOpen default useState is set to fale and create setIsMenuOpen function
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //when toggleMenu is called, it uses setIsMenuOpen function to update the value of isMenuOpen to the opposite of its current value using the logical operator of not(!)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div>
          {isMenuOpen ? (
            <IoMdClose onClick={toggleMenu} />
          ) : (
            <HamburgerIcon onClick={toggleMenu} />
          )}
          <nav
            className={`fixed top-0 left-0 h-screen bg-gray-800 w-64 ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <a className="my-2 text-white" href="#about">
              About
            </a>
            <a className="my-2 text-white" href="#skills">
              Skills
            </a>
            <a className="my-2 text-white" href="#projects">
              Projects
            </a>
            <a className="my-2 text-white" href="#work">
              Work
            </a>
            <a className="my-2 text-white" href="#contact">
              Contact
            </a>
          </nav>
          {/* <span className="ml-3 p-2 text-3xl border-solid font-family-arial text-black font-bold">
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
          </div> */}
        </div>
      </header>
    </>
  );
};

export default NavBar;
