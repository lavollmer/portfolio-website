import React from "react";

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
        <div className="bg-white shadow-md rounded-lg m-4">
          <h3>Project 1</h3>
        </div>
        <div className="bg-white shadow-md rounded-lg m-4">
          <h3>Project 2</h3>
        </div>
        <div className="bg-white shadow-md rounded-lg m-4">
          <h3>Project 3</h3>
        </div>
        <div className="bg-white shadow-md rounded-lg m-4">
          <h3>Project 1</h3>
        </div>
        <div className="bg-white shadow-md rounded-lg m-4">
          <h3>Project 2</h3>
        </div>
        <div className="bg-white shadow-md rounded-lg m-4">
          <h3>Project 3</h3>
        </div>
      </div>
    </>
  );
};

export default ProjectDisplay;
