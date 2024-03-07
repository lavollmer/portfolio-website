import React from "react";
import { TypeAnimation } from "react-type-animation";
import ScrollToTop from "react-scroll-to-top";
import { useSpring, animated } from "react-spring";
import { FaLaptopCode } from "react-icons/fa";

const MainPage = () => {
  const props = useSpring({
    opacity: 2,
    marginTop: 0,
    from: { opacity: 0, marginTop: -500 },
  });
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
          style={{
            fontSize: "2em",
            display: "inline-block",
            color: "black",
            textDecoration: "bold",
          }}
          repeat={Infinity}
        />
        <h2 className="text-4xl font-poppins">websites.</h2>
      </div>
      <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 -translate-x-1/4 z-10 text-black  p-4">
        <animated.div
          style={props}
          className="w-81 h-81 bg-white rounded-full shadow-lg"
        >
          <FaLaptopCode size={250} className="top-1/2 right-1/3 center"/>
        </animated.div>
      </div>

      <ScrollToTop smooth />
    </div>
  );
};

export default MainPage;
