import React from "react";
import Button from "./Button";
import ButtonWebsite from "./ButtonWebsite";

const ProjectDisplay = () => {
  return (
    <>
      <div className="p-10">
        <h1 className="text-4xl font-poppins mr-8">
          Selected Projects and Work of Laura Vollmer
        </h1>
      </div>
      {/* grid container - 3 columns specified - gap of 6 units between columns */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="items-center text-center text-poppins text-2xl">
            Giftify
          </h3>
          <p>
            A collaborative group project to create a gift guide website through
            which I contributed skills in project management, MVC Models, Chakra
            UI implementation, MERN Stack, and MongoDB
          </p>
          <div className="flex flex-row justify-center p-2">
            <Button />
          </div>
          <div className="flex flex-row justify-center p-2">
            <ButtonWebsite />
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg m-4">
          <h3 className="items-center text-center ">Project 2</h3>
        </div>
        <div className="bg-white shadow-md rounded-lg m-4">
          <h3 className="items-center text-center ">Project 3</h3>
        </div>
        <div className="bg-white shadow-md rounded-lg m-4">
          <h3 className="items-center text-center ">Project 1</h3>
        </div>
        <div className="bg-white shadow-md rounded-lg m-4">
          <h3 className="items-center text-center ">Project 2</h3>
        </div>
        <div className="bg-white shadow-md rounded-lg m-4">
          <h3 className="items-center text-center ">Project 3</h3>
        </div>
      </div>
    </>
  );
};

export default ProjectDisplay;
