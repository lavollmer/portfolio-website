import React from "react";
import Background from "../assets/Background.png";
import Profile from "../assets/lauravolprofile.png";

const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className=" flex flex-row container px-5 py-24 mx-auto">
          <div className="text-left p-20" id="about">
            <h2 className="text-gray-900 font-large font-bold title-font tracking-wider text-md">
              ABOUT
            </h2>
            <br></br>
            <p className="text-lg">
              I am a full stack developer and healthcare professional with a
              passion for technology and web development. With 5-6 years of
              experience in healthcare roles and a background in coding, design,
              and marketing through my position as a floral designer and social
              media coordinator at a small business flower shop, I am driven by
              problem-solving and the ever-expanding realm of technology.
            </p>
            <br></br>
            <p className="text-lg">
              Specializing in front-end and back-end web development, I combine
              technical skills with a keen eye for design to deliver exceptional
              user experiences. With recent proficiency in JavaScript, ReactJS,
              HTML, Chakra UI, Bootstrap, and CSS, I am focused on becoming a
              proficient web developer and creating innovative, visually
              captivating websites.
            </p>
            <br></br>
            <p className="text-lg">
              I eagerly seek opportunities to connect, network, and collaborate
              with like-minded individuals, fostering a community of growth and
              learning while exploring new avenues for educational and
              professional development.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-black mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              LAURA VOLLMER
            </h2>
            <p className="text-gray-500">Full Stack Web Developer</p>
          </div>
          <div className="flex flex-row object-scale-down">
            {/* <img
              loading="lazy"
              src={Profile}
              className=" object-scale-down w-full h-full overflow-hidden my-auto max-md:max-w-full max-md:mt-10 rounded-lg"
            /> */}
            <div className="relative w-40 h-40 overflow-hidden rounded-full">
              <img
                loading="lazy"
                src={Profile}
                className="object-cover w-full h-full"
                alt="Profile Image"
              />
              <div className="absolute inset-0 flex items-center justify-center rounded-full">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  /> */}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
