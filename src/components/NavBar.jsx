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
      <div className="flex flex-col h-screen bg-gray-100 z-20">
        {isMenuOpen ? (
          <IoMdClose onClick={toggleMenu} />
        ) : (
          <HamburgerIcon onClick={toggleMenu} />
        )}
        <nav
          className={`fixed top-0 left-0 h-screen bg-green-800 w-64 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col top-0 left-0">
            <div className="flex items-center justify-center h-16 bg-blue-500">
              <h1 className="text-white font-bold text-xl">Page Navigation</h1>
            </div>
            <a className="m-2 text-white" href="#about">
              About
            </a>
            <a className="m-2 text-white" href="#skills">
              Skills
            </a>
            <a className="m-2 text-white" href="#projects">
              Projects
            </a>
            <a className="m-2 text-white" href="#work">
              Work
            </a>
            <a className="m-2 text-white" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
