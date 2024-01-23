import React from "react";

const NavBar = () => {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto w-full h-full flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a class="mr-5 hover:text-gray-900" href="#about">
            About
          </a>
          <a class="mr-5 hover:text-gray-900" href="#projects">
            Projects
          </a>
          <a class="mr-5 hover:text-gray-900" href="#resume">
            Resume
          </a>
          <a class="hover:text-gray-900" href="#contact">
            Contact
          </a>
        </nav>
        <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <span class="ml-3 text-2xl border-solid">Laura Vollmer</span>
        </a>
        <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <a href="https://www.linkedin.com/in/lvollmer/">
            <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-[#BAB7B2] rounded text-base mt-4 md:mt-0">
              LinkedIn
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
