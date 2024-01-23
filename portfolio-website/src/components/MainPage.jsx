import React from "react";
import Background from "../assets/background.png";
import { TypeAnimation } from "react-type-animation";

const MainPage = () => {
  return (
    <div className="flex justify-center items-center">
      <img
        loading="lazy"
        src={Background}
        className="z-0 object-center w-full h-full overflow-hidden my-auto max-md:max-w-full max-md:mt-10 rounded-lg"
      />
      <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/4 z-10 text-black text-2xl font-bold p-4">
        <h1>I am a</h1>
        <TypeAnimation
          sequence={[
            "Creative",
            2000,
            "Coder",
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
    </div>
  );
};

export default MainPage;
