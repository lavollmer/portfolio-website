import React from "react";
import Background from "../assets/background.png";

const MainPage = () => {
  return (
    <div className=" flex flex-row justify-center align-items ">
      <img
        loading="lazy"
        src={Background}
        className=" object-center w-full overflow-hidden my-auto max-md:max-w-full max-md:mt-10 rounded-lg"
      />
    </div>
  );
};

export default MainPage;
