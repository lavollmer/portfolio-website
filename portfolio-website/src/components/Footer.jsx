import React from "react";
import { AiOutlineBulb } from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";
import { FaGit, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <AiOutlineBulb />
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            <span class="ml-3 text-xl">Laura Vollmer</span>
          </a>
          <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Copyright
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="https://www.linkedin.com/in/lvollmer/" class="text-black">
              <GrLinkedin size={24} />
            </a>
            <a href="https://github.com/lavollmer" class="ml-3 text-black">
              <FaGithubSquare size={26} />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
