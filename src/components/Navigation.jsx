import React from "react";
// import Background from "../assets/Background.png";
import { NavLink } from "react-router-dom";
import { MdOutlineWork } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className="flex p-2">
      {/* <nav>
        <div>
          <h1>LV</h1>
        </div>
      </nav> */}
      <ul className="flex flex-row p-2">
        {/* <li>
          <NavLink to="/projects">
            <MdOutlineWork />
          </NavLink>
        </li> */}
        <li>
          <GiHamburgerMenu />
        </li>
        <li>
          <NavLink>
            <AiFillLinkedin />
          </NavLink>
        </li>
        <li>
          <NavLink>
            <FaGithubSquare />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
