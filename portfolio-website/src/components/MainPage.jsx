import React from "react";
import Background from "../assets/background.png";

const MainPage = () => {
  return (
    <>
<div class="w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
  <img src="https://unsplash.com/photos/white-desk-lamp-beside-green-plant-BlIhVfXbi9s" class="absolute top-0 left-0 min-h-full ob" alt="">
  <div class="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
    <div class="col-span-6">
      <span class="uppercase text-white text-xs font-bold mb-2 block">Welcome</span>
      <h1 class="text-white font-extrabold text-5xl mb-8">Designing beautiful and user friendly websites</h1>
      <p class="text-stone-100 text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button class="mt-8 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10">Get started</button>
    </div>
  </div>
</div>
  );
};
      </>

export default MainPage;
