import React from "react";
import { FaGithubSquare } from "react-icons/fa";

const ProjectDisplay = () => {
  return (
    <>
      <div className="p-10">
        <h1 className="text-4xl font-poppins mr-8 items-center text-center p-4">
          Selected Projects and Work of Laura Vollmer
        </h1>
        <h2 className="text-2xl font-poppins mr-8 items-center text-center">
          Please visit Laura's Github for more information about each project
          and repositories.
        </h2>
        <a
          href="https://github.com/lavollmer"
          className="flex flex-col justify-center items-center mt-3"
        >
          <button className="flex flex-row align-items text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-[#957fef] rounded text-lg">
            <FaGithubSquare size={26} />
            <span>Laura Vollmer Github</span>
          </button>
        </a>
      </div>
      {/* grid container - 3 columns specified - gap of 6 units between columns */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="items-center text-center text-poppins text-2xl">
            Giftify
          </h3>
          <p className="p-6">
            A collaborative group project to create a gift guide website through
            which I contributed skills in project management, MVC Models, Chakra
            UI implementation, MERN Stack, and MongoDB.
          </p>
          {/* <div className="flex flex-row justify-center p-2">
            <Button url="www.linkedin.com" />
          </div>
          <div className="flex flex-row justify-center p-2">
            <ButtonWebsite />
          </div> */}
        </div>
        <div className="bg-white shadow-md rounded-lg m-4">
          <h3 className="items-center text-center text-poppins text-2xl ">
            Robot Murder Mystery
          </h3>
          <p className="p-6">
            A group project to create a robot murder mystery dystopian guess-who
            game through collaborative game design, pull requests, code review,
            and pair programming.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg m-4">
          <h3 className="items-center text-center text-poppins text-2xl ">
            Note Taking Application
          </h3>
          <p className="p-6">
            The goal of the project is to create a js file that connects the
            front-end with the back-end functionality. The note taker
            application opens with a entry screen. When the user clicks "get
            started", they are brought to an area to take notes, save notes and
            delete the notes.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg m-4">
          <h3 className="items-center text-center text-poppins text-2xl ">
            Timed Quiz
          </h3>
          <p className="p-6">
            This project involves creating a multiple question quiz for a user
            with a timer element. The user will select the "start button" to
            begin the quiz. During the quiz, the user will answer a series of
            question in which he/she will have to select the answer. Each answer
            will be documented whether it is correct or incorrect and tallied to
            the final score. The user will be notified by the browser whether
            their score is correct or incorrect.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg m-4">
          <h3 className="items-center text-center text-poppins text-2xl ">
            SQL-Employee Tracker
          </h3>
          <p className="p-6">
            This project involved creating a command line user prompt to store
            data about a business. The inquirer prompt asked the end user to
            view all departments, view all roles, view all employees, add an
            employee, remove an employee, update and employee, etc. The end user
            is able to change the data based on the request and update the
            printed table of data.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg m-4">
          <h3 className="items-center text-center text-poppins text-2xl ">
            Schedule Calendar
          </h3>
          <p className="p-6">
            This project uses a daily planner to create a schedule for the user.
            The problem it solves is to add events and appointments to a daily
            planner so that the user may manage their day. The time is blocked
            off in color indicating past, present, and future time compared to
            the current time of day. The current day of the week and date is
            displayed at the top of the page.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectDisplay;
