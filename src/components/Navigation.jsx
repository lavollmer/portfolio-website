import React from "react";
// import Background from "../assets/Background.png";
import { NavLink } from "react-router-dom";
import { MdOutlineWork } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

const Navigation = () => {
  return (
    <div>
      {/* <nav>
        <div>
          <h1>LV</h1>
        </div>
      </nav> */}
      <div>
        <ul>
          <li>
            <NavLink to="/projects">
              <MdOutlineWork />
            </NavLink>
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
          <li>
            <GiHamburgerMenu />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
