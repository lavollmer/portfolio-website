import React from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { AiOutlineClose } from "react-icons/ai";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const sidebarAnimation = useSpring({
    transform: showMenu ? `translateX(0)` : `translateX(100%)`,
  });

  return (
    <div className="absolute top-0 flex flex-row justify-between w-full">
      <h1 className="text-3xl font-poppins p-10 font-bold">LAURA VOLLMER</h1>
      <ul className="flex flex-row right-0 p-10">
        <li className="p-2">
          <button onClick={() => setShowMenu(!showMenu)}>
            <GiHamburgerMenu
              size={40}
              className="hover:text-customColor hover:scale-110 transition duration-100"
            />
          </button>
        </li>
        {showMenu && (
          <animated.div
            style={sidebarAnimation}
            className="absolute top-0 right-0 bg-white text-black w-1/3 h-screen"
          >
            <button    onClick={() => setShowMenu(false)}>
              <AiOutlineClose size={30} />
            </button>
            <nav className="text-2xl font-poppins m-5 font-bold">
              <ul>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/skills">Skills</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
          </animated.div>
        )}
        <li className="p-2">
          <NavLink>
            <AiFillLinkedin
              size={40}
              className="hover:text-customColor hover:scale-110 transition duration-100"
            />
          </NavLink>
        </li>
        <li className="p-2">
          <NavLink>
            <FaGithubSquare
              size={40}
              className="hover:text-customColor hover:scale-110 transition duration-100"
            />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
