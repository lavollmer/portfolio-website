import React from "react";

const Resume = () => {
  return (
    <div className="text-center items-left">
      <div id="resume">
        <a href="../src/assets/resume/LauraVollmerResume2024.pdf" download>
          <button className="bg-black hover:bg-[#957fef] text-white font-poppins font-bold py-2 px-4 rounded">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
