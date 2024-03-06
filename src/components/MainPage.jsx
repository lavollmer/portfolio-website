import React from "react";
import Background from "../assets/background.png";
import { TypeAnimation } from "react-type-animation";
import ScrollToTop from "react-scroll-to-top";
import ColorBackground from "../assets/ColorBackground.jpg";

const MainPage = () => {
  return (
    <section id="home">
      <img
        loading="lazy"
        src={ColorBackground}
        className="z-0 object-cover w-screen h-screen rounded-lg"
        // overflow-hidden my-auto max-md:max-w-full max-md:mt-10 rounded-lg"
        alt="Image of a pink and black splash background"
      />
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
    </section>
  );
};

export default MainPage;
