import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center align-items space-x-4">
      <div>
        <a href="#about">
          <h2>About</h2>
        </a>
      </div>
      <div>
        <a href="#resume">
          <h2>Resume</h2>
        </a>
      </div>
      <div className="text-xl">
        <h1>Laura Vollmer</h1>
      </div>
      <div>
        <a href="#projects">
          <h2>Projects</h2>
        </a>
      </div>
      <div>
        <a href="#contact">
          <h2>Contact</h2>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
