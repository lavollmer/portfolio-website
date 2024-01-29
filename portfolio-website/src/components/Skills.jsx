import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa6";
import { SiCsswizardry } from "react-icons/si";
import { BsFiletypeHtml } from "react-icons/bs";
import { BsPersonWorkspace } from "react-icons/bs";

const Skills = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div
            className="flex flex-wrap w-full mb-20 flex-col items-center text-center"
            id="skills"
          >
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Technical Skills
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-black">
              Please check out my Github Profile and related skills.
            </p>
            {/* <a
              href="https://github.com/lavollmer"
              classNameName="flex flex-col justify-center items-center mt-3"
            >
              <button className="flex text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray rounded text-lg">
                Github
              </button>
            </a> */}
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#838871] text-white mb-4">
                  <IoLogoJavascript />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
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
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#838871] text-white mb-4">
                  <GrReactjs />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  ReactJS
                </h2>
                <p className="leading-relaxed text-base">
                  ReactJS is a JavaScript library that efficiently manipulates
                  the Document Object Model (DOM) to render web pages faster and
                  create highly dynamic and responsive web applications.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#838871] text-white mb-4">
                  <FaNodeJs />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
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
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#838871] text-white mb-4">
                  <SiCsswizardry />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
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
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#838871] text-white mb-4">
                  <BsFiletypeHtml />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
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
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#838871] text-white mb-4">
                  <BsPersonWorkspace />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
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
