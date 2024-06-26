import React from "react";
import { TypeAnimation } from "react-type-animation";
import ScrollToTop from "react-scroll-to-top";
import { useSpring } from "react-spring";
import Resume from "./Resume";
import ViewPort from "./ViewPort";

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
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl font-poppins">
          Hey, I'm Laura Vollmer.
        </h1>
        <h1 className="text-xl md:text-5xl lg:text-6xl font-poppins">
          Software Developer
        </h1>
        <h2 className="text-xl md:text-4xl  font-poppins mt-4 md:mt-8">
          I love to create
        </h2>
        {/* <TypeAnimation
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
            fontWeight: "bold",
          }}
          repeat={Infinity}
        /> */}
        <h2 className="text-xl md:text-4xl font-poppins">
          software and websites.
        </h2>
        <div className="flex flex-col md:flex-row flex-between space-y-5 md:space-y-0 md:space-x-20 m-10 items-left">
          <Resume />
          <ViewPort />
        </div>
      </div>
      <ScrollToTop smooth />
    </div>
  );
};

export default MainPage;
