import React from "react";
import { AiOutlineBulb } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <AiOutlineBulb />
            {/* <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path> */}
            <span className="ml-3 text-xl">Laura Vollmer</span>
          </div>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Copyright
          </p>
          <span className="flex flex-row space-between sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-align:center">
            <a
              href="https://www.linkedin.com/in/lvollmer/"
              aria-label="LinkedIn Link"
              className="text-black flex flex-col justify-content items-center m-2"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin size={28} />
              LinkedIn
            </a>
            <a
              href="https://github.com/lavollmer"
              aria-label="Github Link"
              className=" text-black flex flex-col justify-content items-center m-2"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGithubSquare size={28} /> Github
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
