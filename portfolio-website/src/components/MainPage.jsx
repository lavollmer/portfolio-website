import React from "react";
import Background from "../assets/background.png";
import { TypeAnimation } from "react-type-animation";

const MainPage = () => {
  return (
    <div className="flex flex-row justify-center align-items">
      <div className="relative font-bold">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Software Developer",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Coder",
            1000,
            "Designer",
            1000,
            "Creative",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />

        <img
          loading="lazy"
          src={Background}
          className=" object-center w-full overflow-hidden my-auto max-md:max-w-full max-md:mt-10 rounded-lg"
        />
      </div>
    </div>
  );
};

export default MainPage;
