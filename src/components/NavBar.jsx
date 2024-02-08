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
      <div className="flex">
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
      </div>
    </>
  );
};

export default NavBar;
