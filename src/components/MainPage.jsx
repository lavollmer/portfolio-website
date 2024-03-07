import React from "react";
import { TypeAnimation } from "react-type-animation";
import ScrollToTop from "react-scroll-to-top";


const MainPage = () => {
  return (
    <div id="home" className="main-page">
      <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/4 z-10 text-black  p-4">
        <h1 className="text-8xl font-poppins">
          Software <br /> Developer.
        </h1>
        <h2 className="text-4xl font-poppins mt-8">I like to create</h2>
        <TypeAnimation
          sequence={[
            "innovative",
            2000,
            "inspiring",
            2000,
            "user-friendly",
            2000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block", color: "black", textDecoration: "bold"}}
          repeat={Infinity}
        /> 
        <h2 className="text-4xl font-poppins">websites.</h2>
       </div>

      <ScrollToTop smooth />
    </div>
  );
};

export default MainPage;
