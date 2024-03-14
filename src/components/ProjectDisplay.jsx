import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import Button from "./Button";
import ButtonWebsite from "./ButtonWebsite";

const ProjectDisplay = () => {
  return (
    <>
      <section className="flex flex-col  m-10 justify-evenly" id="projects">
        <h1 className="text-xl md:text-4xl m-2 font-poppins items-center text-center p-4">
          Selected Coding Projects <br /> of Laura Vollmer
        </h1>
        <h2 className="text-md md:text-2xl font-poppins items-center text-center">
          Please visit Github for more information about each project and
          repositories.
        </h2>
        <a
          href="https://github.com/lavollmer"
          aria-label="Laura Vollmer Github"
          className="flex flex-col justify-center items-center text-center mt-3"
        >
          <button className="flex flex-row align-items text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-[#957fef] rounded text-lg">
            <FaGithubSquare size={26} />
            <span>Laura Vollmer Github</span>
          </button>
        </a>
        {/* grid container - 3 when medium sized or above columns specified - gap of 6 units between columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5 py-24 mx-auto px-auto">
          <div className="bg-white shadow-lg rounded-lg outline outline-black p-2">
            <h3 className="items-center text-center text-poppins text-xl md:text-2xl">
              Giftify
            </h3>
            <p className="p-4 md:p-6 text-lg md:text-xl">
              A collaborative group project to create a gift guide website
              through which I contributed skills in project management, MVC
              Models, Chakra UI implementation, MERN Stack, and MongoDB.
            </p>
            <div className="flex flex-row justify-center p-2">
              <a
                href="https://github.com/lavollmer/gift-guide"
                aria-label="Laura Vollmer Github Gift-Guide Repository"
                className="flex flex-col justify-center items-center mt-3"
              >
                <Button id="Gift Guide Github Code Button" />
              </a>
            </div>

            <div className="flex flex-row justify-center p-2">
              <a
                href="https://gift-guide-020589889d66.herokuapp.com/"
                aria-label="Laura Vollmer Gift-Guide Website"
              >
                <ButtonWebsite id="Gift Guide Website Button" />
              </a>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg outline outline-black p-2">
            <h3 className="items-center text-center text-poppins text-xl md:text-2xl">
              Robot Murder Mystery
            </h3>
            <p className="p-4 md:p-6 text-lg md:text-xl">
              A group project to create a robot murder mystery dystopian
              guess-who game through collaborative game design, pull requests,
              code review, and pair programming.
            </p>
            <div className="flex flex-row justify-center p-2">
              <a
                href="https://github.com/lavollmer/robot-murder-mystery"
                aria-label="Laura Vollmer Github Robot Murder Mystery Repository"
                className="flex flex-col justify-center items-center mt-3"
              >
                <Button id="Robot Murder Mystery Github Code Button" />
              </a>
            </div>
            <div className="flex flex-row justify-center p-2">
              <a
                href="https://franklinbrad.github.io/robot-murder-mystery/"
                aria-label="Laura Vollmer Robot Murder Mystery Website"
              >
                <ButtonWebsite id="Robot Murder Mystery Website Button" />
              </a>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg outline outline-black p-2">
            <h3 className="items-center text-center text-poppins text-lg md:text-2xl ">
              Note Taking Application
            </h3>
            <p className="p-4 md:p-6 text-lg md:text-xl">
              The goal of the project is to create a js file that connects the
              front-end with the back-end functionality. When the user clicks
              "get started", they are brought to an area to take notes, save
              notes and delete the notes.
            </p>
            <div className="flex flex-row justify-center p-2">
              <a
                href="https://github.com/lavollmer/note-taker?tab=readme-ov-file"
                aria-label="Laura Vollmer Github Note Taking Application Repository"
                className="flex flex-col justify-center items-center mt-3"
              >
                <Button id="Note Taking Application Github Code Button" />
              </a>
            </div>
            <a
              href="https://noter-taker-d6c57055bb47.herokuapp.com/"
              aria-label="Laura Vollmer Github Note Taking Application Website"
            >
              <div className="flex flex-row justify-center p-2">
                <ButtonWebsite id="Note Taking Website Button" />
              </div>
            </a>
          </div>
          <div className="bg-white shadow-md rounded-lg outline outline-black p-2">
            <h3 className="items-center text-center text-poppins text-lg md:text-2xl ">
              Timed Quiz
            </h3>
            <p className="p-4 md:p-6 text-lg md:text-xl">
              This project involves creating a multiple question quiz for a user
              with a timer element. The user will select the "start button" to
              begin the quiz. During the quiz, the user will answer a series of
              question in which he/she will have to select the answer. Each
              answer will be documented whether it is correct or incorrect and
              tallied to the final score.
            </p>
            <div className="flex flex-row justify-center p-2"></div>
            <a
              href="https://github.com/lavollmer/timed-quiz?tab=readme-ov-file"
              aria-label="Laura Vollmer Github Timed Quiz Repository"
              className="flex flex-col justify-center items-center mt-3"
            > 
                <Button id="Timed Quiz Github Code Button" />
            </a>
             </div>
            <div className="flex flex-row justify-center p-2">
              <a
              href="https://lavollmer.github.io/timed-quiz/"
              aria-label="Laura Vollmer Timed Quiz Website"
            >
              <ButtonWebsite id="Timed Quiz Website Button" />
              </a>
              </div>

          </div>
          <div className="bg-white shadow-md rounded-lg outline outline-black p-2">
            <h3 className="items-center text-center text-poppins text-lg md:text-2xl ">
              Logo Maker
            </h3>
            <p className="p-4 md:p-6 text-lg md:text-xl">
              The logo-maker project was to create a logo based on user input
              with SVG. The user is asked a series of questions such as color,
              shape, text color and text in logo. Technical requirements include
              using inquirer, jest, and writeFile SVG. Each image generated is a
              300x200 pixel image size.
            </p>

            <div className="flex flex-row justify-center p-2">
              <a
                href="https://github.com/lavollmer/logo-maker?tab=readme-ov-file"
                aria-label="Laura Vollmer Github Logo Maker Repository"
                className="flex flex-col justify-center items-center mt-3"
              >
                <Button id="Logo Maker Github Code Button" />
              </a>
            </div>
            <div className="flex flex-row justify-center p-2">
              <a
                href="https://drive.google.com/file/d/1RZFH9m08NgvzWOmgTfGifvGVV8TT4nzT/view"
                aria-label="Laura Vollmer Logo Maker Walkthrough Video"
              >
                <ButtonWebsite id="Logo Maker Video Submission Button" />
              </a>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg outline outline-black p-2">
            <h3 className="items-center text-center text-poppins text-lg md:text-2xl ">
              Schedule Calendar
            </h3>
            <p className="p-4 md:p-6 text-lg md:text-xl">
              This project uses a daily planner to create a schedule for the
              user. The problem it solves is to add events and appointments to a
              daily planner so that the user may manage their day. The time is
              blocked off in color indicating past, present, and future time
              compared to the current time of day.
            </p>
            <div className="flex flex-row justify-center p-2">
              <a
                href="https://github.com/lavollmer/schedule-calendar?tab=readme-ov-file"
                aria-label="Laura Vollmer Github Schedule Calendar Repository"
                className="flex flex-col justify-center items-center mt-3"
              >
                <Button id="Schedule Calendar Github Code Button" />
              </a>
            </div>
            <div className="flex flex-row justify-center p-2">
              <a
                href="https://lavollmer.github.io/schedule-calendar/"
                aria-label="Laura Vollmer Schedule Calendar Website"
              >
                <ButtonWebsite id="Schedule Calendar Website Button" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDisplay;
