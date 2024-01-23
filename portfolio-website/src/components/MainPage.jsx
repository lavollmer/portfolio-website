import React from "react";
import Background from "../assets/background.png";

const MainPage = () => {
  return (
    <>
      <section className="text-gray-600 body-font w-full h-full relative">
        <img
          src={Background}
          alt="Background Image"
          className="rounded-radius absolute inset-0 w-full h-full object-cover"
        />
        <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200 relative z-10">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Designing Innovative Websites
          </h1>
          <p class="leading-relaxed text-base">Hello, Hello, Hello</p>
        </div>
      </section>
    </>
  );
};

export default MainPage;
