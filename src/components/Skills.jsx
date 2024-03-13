import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa6";
import { SiCsswizardry } from "react-icons/si";
import { BsFiletypeHtml } from "react-icons/bs";
import { BsPersonWorkspace } from "react-icons/bs";
// import { FaGithubSquare } from "react-icons/fa";

const Skills = () => {
  return (
    <div>
      <section
        className="text-black-600 body-font items-center text-center"
        id="skills"
      >
        <div className="container px-5 py-24 mx-auto">
          <div
            className="flex flex-wrap w-half mb-5 flex-col items-center text-center"
            id="skills"
          >
            <h1 className="text-3xl md:text-6xl font-poppins p-2">
              Technical Skills
            </h1>
            <p className=" sm:text-lg md:text-xl p-2 leading-relaxed text-black font-poppins">
              I am a dedicated and passionate professional with a strong
              background in various technical domains.
            </p>

            {/* <a
              href="https://github.com/lavollmer"
              className="flex flex-col justify-center items-center mt-3"
            >
              <button className="flex flex-row align-items text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-[#957fef] rounded text-lg">
                <FaGithubSquare size={26} />
                <span>Laura Vollmer Github</span>
              </button>
            </a> */}
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-black p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-half bg-[#957fef] text-white mb-4">
                  <IoLogoJavascript size={30} />
                </div>
                <h2 className="text-lg text-black font-medium title-font mb-2">
                  JavaScript
                </h2>
                <p className="leading-relaxed text-base">
                  JavaScript is a powerful client-side scripting language used
                  mainly for enhancing user interaction with webpages, and
                  making the web more dynamic and responsive.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-black p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-half  bg-[#957fef] text-white mb-4">
                  <GrReactjs size={30} />
                </div>
                <h2 className="text-lg text-black font-medium  title-font mb-2">
                  React.js
                </h2>
                <p className="leading-relaxed text-base">
                  React.js is a JavaScript library that efficiently manipulates
                  the Document Object Model (DOM) to render web pages faster and
                  create highly dynamic and responsive applications.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-black p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-half bg-[#957fef] text-white mb-4">
                  <FaNodeJs size={30} />
                </div>
                <h2 className="text-lg text-black font-medium title-font mb-2">
                  Node.js
                </h2>
                <p className="leading-relaxed text-base">
                  Node.js is a runtime environment that allows you to execute
                  JavaScript code outside of a web browser, making it possible
                  to build server-side applications using JavaScript.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-black p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-half bg-[#957fef] text-white mb-4">
                  <SiCsswizardry size={30} />
                </div>
                <h2 className="text-lg text-black font-medium title-font mb-2">
                  CSS
                </h2>
                <p className="leading-relaxed text-base">
                  Cascading Style Sheets is the language used to style web
                  pages, controlling the design, layout, and display variations
                  for different devices and screen sizes.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-black p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-half bg-[#957fef] text-white mb-4">
                  <BsFiletypeHtml size={30} />
                </div>
                <h2 className="text-lg text-black font-medium title-font mb-2">
                  HTML
                </h2>
                <p className="leading-relaxed text-base">
                  HTML, or HyperText Markup Language, is the standard language
                  for creating web pages and web applications, defining the
                  structure and layout of content.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-black p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-half bg-[#957fef] text-white mb-4">
                  <BsPersonWorkspace size={30} />
                </div>
                <h2 className="text-lg text-black font-medium title-font mb-2">
                  Project Management
                </h2>
                <p className="leading-relaxed text-base">
                  Programming project management involves using Trello and
                  Google Spreadsheets to organize tasks, and collaborate with
                  the development team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
