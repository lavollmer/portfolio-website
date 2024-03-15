import React from "react";

const Resume = () => {
  return (
    <div className="text-center ">
      <div id="resume">
        <a href="../src/assets/resume/LauraVollmerResume2024.pdf" download>
          <button className="bg-black hover:bg-[#D9CBE5] hover:text-black text-white font-poppins font-bold py-2 px-4 rounded md:text-lg text-xs">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
