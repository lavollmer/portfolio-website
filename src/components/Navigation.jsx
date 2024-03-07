import React from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className="absolute top-0 flex flex-row justify-between w-full">
      <h1 className="text-3xl font-poppins p-10 font-bold">LAURA VOLLMER</h1>
      <ul className="flex flex-row right-0 p-10">
        <li className="p-2">
          <GiHamburgerMenu size={40} />
        </li>
        <li className="p-2">
          <NavLink>
            <AiFillLinkedin size={40} />
          </NavLink>
        </li>
        <li className="p-2">
          <NavLink>
            <FaGithubSquare size={40} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
