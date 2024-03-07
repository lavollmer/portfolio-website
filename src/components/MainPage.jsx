import React from "react";
import { TypeAnimation } from "react-type-animation";
import ScrollToTop from "react-scroll-to-top";
import { useSpring, animated } from "react-spring";
import { FaLaptopCode } from "react-icons/fa";

const MainPage = () => {
  const props = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -1000 },
    config: { duration: 2000 },
  });

  return (
    <>
      <div className="text-center mt-10 md:mt-20">
        <h1 className="text-4xl md:text-6xl font-poppins">
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
            fontSize: "1em",
            md: {fontSize: "2em"},
            display: "inline-block",
            color: "black",
            textDecoration: "bold",
          }}
          repeat={Infinity}
        />
        <h2 className="text-2xl md:text-4xl font-poppins">websites.</h2>
      </div>
      <div className="absolute top-1/4 md:top-1/2 right-1/4 md:right-1/3 z-10 text-black  p-4">
        <animated.div
          style={props}
          className="w-64 h-64 md:w-100 md:h-100 bg-white rounded-full shadow-lg"
        >
          <FaLaptopCode size={250} className="md:size-250 top-1/2 right-1/3 center" />
        </animated.div>
        <ScrollToTop smooth />
      </div>
    </>
  );
};

export default MainPage;
