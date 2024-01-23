import React from "react";
import Background from "../assets/background.png";

const MainPage = () => {
  return (
    <div className="justify-center align-items">
      <h1 className="absolute z-10 text-black text-4xl ml-30 mt-60 font-bold p-4">
        Creating beautiful, user-friendly
      </h1>
      <h1 className="absolute z-10 text-black text-4xl ml-30 mt-80 font-bold p-4">
        websites
      </h1>
      <img
        loading="lazy"
        src={Background}
        className=" object-center w-full overflow-hidden my-auto max-md:max-w-full max-md:mt-10 rounded-lg"
      />
    </div>
  );
};

export default MainPage;
