import React from "react";
import { TypeAnimation } from "react-type-animation";
import ScrollToTop from "react-scroll-to-top";
import { useSpring } from "react-spring";
import Resume from "./Resume";

const MainPage = () => {
  const props = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -1000 },
    config: { duration: 2000 },
  });

  return (
    <div id="home" className="main-page">
      <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/4 z-10 text-black  p-4">
        <h1 className="text-5xl md:text-8xl font-poppins">
          Software <br /> Developer.
        </h1>
        <h2 className="text-2xl md:text-4xl font-poppins mt-4 md:mt-8">
          I love to create
        </h2>
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
          style={{
            fontSize: "2em",
            display: "inline-block",
            color: "black",
            textDecoration: "bold",
          }}
          repeat={Infinity}
        />
        <h2 className="text-2xl md:text-4xl font-poppins">
          software and websites.
        </h2>
        <div className="m-10 text-left items-left">
          <Resume />
        </div>
      </div>
      <ScrollToTop smooth />
    </div>
  );
};

export default MainPage;
