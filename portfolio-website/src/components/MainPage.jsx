import React from "react";
import Background from "../assets/background.png";

const MainPage = () => {
  return (
    <div className="justify-center align-items ">
      <h1 className="flex flex-row z-10">Creating beautiful websites</h1>
      <img
        loading="lazy"
        src={Background}
        className=" object-center w-full overflow-hidden my-auto max-md:max-w-full max-md:mt-10 rounded-lg"
      />
    </div>
  );
};

export default MainPage;
