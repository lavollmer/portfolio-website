import React from "react";
import React, { useRef } from "react";
//import emailjs from emailjs/browser package
import emailjs from "@emailjs/browser";

//define functional component Contact
const Contact = () => {
  //useRef hook to reference variable form
  const form = useRef();

  //handle form submission
  const sendEmail = (e) => {
    //stop form submission default behavior
    e.preventDefault();
    //form.current represents the data to be sent
    emailjs
      .sendForm(
        "service_qkcv0rh",
        "template_r8nnexl",
        form.current,
        "B35w6zrADtq1_4Mpk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        //catch errors
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section className=" flex content-center text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12" id="contact">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black font-bold">
              Reach out to me on
              <a
                href="https://www.linkedin.com/in/lvollmer/"
                className="font-bold text-green-800"
              >
                <span> LinkedIn </span>
              </a>
              or take a look at my
              <a
                href="https://github.com/lavollmer"
                className="font-bold text-green-800"
              >
                <span> Github </span>
              </a>
              or send me an email with the form below!
            </p>
            <div className=" p-2 w-full leading-relaxed text-black">
              <p className="font-bold">
                Located in Minneapolis, Minnesota | Open to Remote (USA)
              </p>
            </div>
          </div>
          {/* onSubmit is set to sendEmail which is triggered when form is submitted, form data is called and sent with emailJS */}
          <form ref={form} onSubmit={sendEmail}>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    className="flex mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-500 rounded text-lg"
                    type="submit"
                    value="Send"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
