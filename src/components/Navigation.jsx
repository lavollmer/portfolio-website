import React from "react";
import Background from "../assets/Background.png";

const Navigation = () => {
  return (
    <div>
      <nav>
        <div>
          <Background />
        </div>
      </nav>
      <div>
        <ul>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
