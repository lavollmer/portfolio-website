import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

//hamburger icon receives onclick prop event handler
const HamburgerIcon = ({ onClick }) => {
  return (
    <div>
      <button className="outline-none" onClick={onClick}>
        <GiHamburgerMenu />
      </button>
    </div>
  );
};

export default HamburgerIcon;
