import React from "react";
import { TypeAnimation } from "react-type-animation";
import ScrollToTop from "react-scroll-to-top";
import { FaDivide } from "react-icons/fa";

const MainPage = () => {
  return (
    <div id="home" className="main-page">
      <div className="absolute top-1/4 left-1/4 transform -translate-y-1/2 -translate-x-1/4 z-10 text-black  font-bold p-4">
        <h1 className="text-4xl font-poppins">
          Laura <br /> Vollmer
        </h1>
      </div>
      <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/4 z-10 text-black text-2xl font-bold p-4">
        <h1>I am a</h1>
        <TypeAnimation
          sequence={[
            "Creative",
            2000,
            "<coder>",
            2000,
            "Designer",
            2000,
            "Web Developer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        /> 
       </div>

      <ScrollToTop smooth />
    </div>
  );
};

export default MainPage;
