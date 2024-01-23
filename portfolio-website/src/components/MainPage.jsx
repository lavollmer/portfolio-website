import React from "react";
import Background from "../assets/background.png";

const MainPage = () => {
  return (
    <div classname="bg-white flex flex-col justify-center items-stretch ">
      <div classname="bg-neutral-50 flex w-full flex-col items-stretch pl-9 pr-4 pt-4 pb-12 max-md:max-w-full max-md:pl-5">
        <div classname="flex w-full items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <div classname="self-center w-full max-w-[1266px] mt-20 mb-12 max-md:max-w-full max-md:my-10">
            <div classname="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div classname="flex flex-col items-stretch w-[52%] max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  src={Background}
                  classname="aspect-[0.96] object-contain object-center w-full overflow-hidden my-auto max-md:max-w-full max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
