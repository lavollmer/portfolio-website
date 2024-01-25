import React from "react";
import Color from "../assets/colorimage.png";
import Robo from "../assets/roboguesswho.png";
import Hex from "../assets/hexcode.png";
import Gift from "../assets/giftify.png";

const Projects = () => {
  return (
    <>
      <section className="text-gray-600 body-font" id="projects">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Coding Projects that utilize JavaScript, HTML, CSS, ChakraUI,
              TailwindCSS, and much more. Projects listed include group
              collaborations, solo coding and various skills are represented.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                  src={Robo}
                  alt="Robot Guess-Who Clue Game"
                />
                <div className="rounded-md px-8 py-10 relative z-10 w-full border-4 border-[#B6B6B5] bg-white opacity-0 hover:opacity-100">
                  <a href="https://franklinbrad.github.io/robot-murder-mystery/">
                    <h2 className="tracking-widest text-sm title-font font-medium text-[#625C47] mb-1">
                      Group Project
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Robot Murder Mystery
                    </h1>
                    <p className="leading-relaxed">
                      You've been called in for Detective work by the
                      International Galactic Robot Department to solve the case.
                      Ever since the world created a new population of Bots,
                      there needed to be structure and order.
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                  src={Hex}
                  alt="Hex Tutorial"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-[#B6B6B5] bg-white opacity-0 hover:opacity-100">
                  <a href="https://gist.github.com/lavollmer/ce5334f65987446ca95d2a15bf8d53ae">
                    <h2 className=" rounded-md tracking-widest text-sm title-font font-medium text-[#625C47] mb-1">
                      Regex Tutorial
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Hex Codes
                    </h1>
                    <p className="leading-relaxed">
                      The regular expression described in this tutorial is
                      matching a hex value. The tutorial will discuss how a
                      regex, a shorthand for regular expression, is a pattern
                      that describes a set of strings that tests against an
                      input string.
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                  src={Gift}
                  alt="Giftify Website"
                />
                <div className=" rounded-md px-8 py-10 relative z-10 w-full border-4 border-[#B6B6B5] bg-white opacity-0 hover:opacity-100">
                  <a href="https://gift-guide-020589889d66.herokuapp.com/">
                    <h2 className="tracking-widest text-sm title-font font-medium text-[#625C47] mb-1">
                      Group Project
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Giftify
                    </h1>
                    <p className="leading-relaxed">
                      This group project involved creating a gift guide website
                      for multiple end users. The purpose of the website was to
                      help end users purchase gifts for other individuals, and
                      those in specific groups (i.e. Secret Santa, family gift
                      groups).
                    </p>
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/602x362"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Solo Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Grace Hopper Tribute Page
                  </h1>
                  <p className="leading-relaxed">
                    Tribute Page is a tribute page to Grace Murray Hopper, a
                    pioneer in computer programming languages. Grace Hopper
                    played a vital role in the development of COBOL and
                    popularized the concept of machine-independent programming.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/605x365"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Solo Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Note Taker
                  </h1>
                  <p className="leading-relaxed">
                    The goal of the project is to create a js file that connects
                    the front-end with the back-end functionality. The note
                    taker application opens with a entry screen. When the user
                    clicks "get started", they are brought to an area to take
                    notes, save notes and delete the notes.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/606x366"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Solo Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    SQL Employee Tracker
                  </h1>
                  <p className="leading-relaxed">
                    This project involved creating a command line user prompt to
                    store data about a business. The inquirer prompt asked the
                    end user to view all departments, view all roles, view all
                    employees, add an employee, remove an employee, update and
                    employee, etc. The end user is able to change the data based
                    on the request and update the printed table of data.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
