import React from "react";

const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font flex flex-column lg:flex-row">
        <div className="container px-5 py-24 mx-auto md:p-2">
          <div className="text-left lg:p-20">
            <h2
              className="text-gray-900 font-small md:font-large font-bold title-font tracking-wider text-md pt-10"
              id="about"
            >
              ABOUT
            </h2>
            <br></br>
            <p className="text-base sm:text-xs lg:text-lg">
              I am a full stack developer and healthcare professional with a
              passion for technology and web development. With 5-6 years of
              experience in healthcare roles and a background in coding, design,
              and marketing through my position as a floral designer and social
              media coordinator at a small business flower shop, I am driven by
              problem-solving and the ever-expanding realm of technology.
            </p>
            <br></br>
            <p className="text-base sm:text-xs lg:text-lg">
              Specializing in front-end and back-end web development, I combine
              technical skills with a keen eye for design to deliver exceptional
              user experiences. With recent proficiency in JavaScript, React.js,
              HTML, Chakra UI, Tailwind CSS, Bootstrap, and CSS, I am focused on
              becoming a proficient web developer and creating innovative,
              visually captivating websites.
            </p>
            <br></br>
            <p className="text-base sm:text-xs lg:text-lg">
              I eagerly seek opportunities to connect, network, and collaborate
              with like-minded individuals, fostering a community of growth and
              learning while exploring new avenues for educational and
              professional development.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-black mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider sm:text-xs md:text-sm">
              LAURA VOLLMER
            </h2>
            <p className="text-gray-500 sm:text-xs md:text-sm">
              Minneapolis, Minnesota | Full Stack Web Developer
            </p>
          </div>
          <div className="flex sm:flex-column lg:flex-row justify-center items-center sm:p-5 ">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover w-[70%] h-[40%]"
              alt="Computer Coding Image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
